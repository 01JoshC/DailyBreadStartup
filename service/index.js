const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const cors = require('cors');
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

// The scores and users are saved in memory and disappear whenever the service is restarted.
let users = [];
//let scores = [];

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Allows use of my third party API to be in compliance with CORS
app.use(cors());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      await DB.updateUser(user);
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
    DB.updateUser(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// Get High Streaks
apiRouter.get('/streaks', verifyAuth, async (_req, res) => {
  const streaks = await DB.getHighStreaks(); //not sure suere this getHighScores function is yet
  res.send(streaks);
});

apiRouter.get('/progress', (_req, res) => {
  DB.getUser(_req.query.email).then((user) => {
    let curr_book = user.book;
    let curr_chapter = user.chapter;
    res.send({book: curr_book, chapter: curr_chapter});
  });
});

apiRouter.post('/progress', (_req, res) => {
  DB.updateProgress(_req.body.email, _req.body.book, _req.body.chapter)
  res.status(201).send({result : "updated"})
});

apiRouter.get('/streak', verifyAuth, async (_req, res) => {
  let streak = await DB.getStreak(_req.body.email)
  res.send({"streak": streak})
})

apiRouter.post('/streak', (_req, res) => {
  let new_timestamp = new Date(Date.now())
  let last_timestamp = 0.00

  DB.getUser(_req.body.email).then((user) => {
    last_timestamp = user.timestamp
    DB.updateTimestamp(_req.body.email, new_timestamp)
    
    //checks for new users
    if (user.timestamp == 0) {
      DB.updateStreak(_req.body.email, 1)
      res.status(201).send({"message" : "Congratulations! Keep reading." , "streak" : 1})
      return
    }

    //checking same day
    if (new_timestamp.toDateString() === last_timestamp.toDateString()){
      res.status(200).send({"message" : "You're just trying to flex now, aren't you?" , "streak" : null})
      return
    }

    last_timestamp += 86400000

    //checking for next day
    if (new_timestamp.toDateString() === last_timestamp.toDateString()){
      let curr_streak = DB.getStreak(_req.body.email)
      let new_streak = curr_streak + 1
      DB.updateStreak(_req.body.email, new_streak)
      res.status(201).send({"message" : "Congrats! Your new streak is: " , "streak" : new_streak})
    } else {
      DB.updateStreak(_req.body.email, 1)
      res.status(201).send({"message" : "Never too late to start!" , "streak" : 1})
    }
  })
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
    timestamp: 0, 
    book: "genesis",
    chapter: 1
  };
  await DB.addUser(user);
  await DB.addStreak({"email": email, "streak": 0})

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService =app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);