# CS 260 Complete Study Guide

*Comprehensive Review of Web Development Concepts*

---

## Quick Reference Table

| Topic | Key Points |
|-------|------------|
| **Default Ports** | HTTP (80), HTTPS (443), SSH (22) |
| **Status Codes** | 3xx (Redirection), 4xx (Client Errors), 5xx (Server Errors) |
| **Cookie Attributes** | Secure (HTTPS only), HttpOnly (no JS access), SameSite (CSRF protection) |
| **Password Storage** | Always hash with bcrypt, never store plain text |
| **CSS Selectors** | `#` = ID, `.` = class, no prefix = element, `*` = all |
| **Box Model** | Content → Padding → Border → Margin (inside out) |
| **React Hooks** | useState (state), useContext (context), useRef (DOM refs), useEffect (side effects) |
| **Key Tools** | Node.js (runtime), NPM (packages), PM2 (process manager), Vite (build tool) |
| **Acronyms** | JSX (JavaScript XML), AWS (Amazon Web Services), NPM (Node Package Manager), NVM (Node Version Manager) |

---

# PART 1: HTML FUNDAMENTALS

---

## 1. Basic HTML Structure

**Quick Summary:**
- `<!DOCTYPE html>` tells browser to use HTML5 specs (not an actual tag)
- `<p>` = paragraph, `</p>` = closing tag
- `<h1>` to `<h6>` = headings (h1 largest)
- `<ol>` = ordered list, `<ul>` = unordered list, `<li>` = list item
- `<div>` = block container, `<span>` = inline container
- `<script>` = JavaScript, `<link>` = external resources

Every HTML document starts with a doctype declaration that directs the browser to use relevant HTML5 specifications when rendering the page. It's not an HTML tag—it's an instruction to the browser about which version of HTML the page is written in.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Main Heading</h1>
  <p>A paragraph of text.</p>
</body>
</html>
```

---

## 2. The `<div>` Element

**Quick Summary:**
- Creates a division/container in the document
- Used to group content for CSS styling or JavaScript manipulation
- Block-level element (takes full width, starts new line)
- Can have `id` (unique) or `class` (reusable) attributes

The `<div>` tag creates a division within an HTML document so that you can act upon it with CSS or JavaScript. It's a block-level container used for grouping and styling content. The div itself has no visual representation until styled with CSS.

```html
<div id="reviews">
  <div class="review">
    <p>Great content!</p>
    <p class="author">Frank</p>
  </div>
  <div class="review">
    <p>I want more!</p>
    <p class="author">Martha</p>
  </div>
</div>
```

---

## 3. The `<link>` Element

**Quick Summary:**
- Goes in the `<head>` section
- Loads external stylesheets and fonts
- `href` = URL of resource, `rel` = relationship type
- Common use: loading Google Fonts

The `<link>` element loads external resources like stylesheets and fonts. When loading a Google Font, it loads a stylesheet that makes that font available for use with CSS throughout your document.

```html
<head>
  <!-- Loads Google Font "Arvo" for use in CSS -->
  <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" />
  
  <!-- Then use in CSS: font-family: 'Arvo', serif; -->
</head>
```

---

## 4. Images with Hyperlinks

**Quick Summary:**
- Wrap `<img>` inside `<a>` to make clickable image
- `<a>` uses `href` for destination URL
- `<img>` uses `src` for image source
- Common mistake: mixing up `href` and `src`

```html
<!-- CORRECT: Image that links to xkcd.com -->
<a href="http://xkcd.com/">
  <img src="http://imgs.xkcd.com/logo.png" />
</a>

<!-- WRONG: src/href swapped -->
<a src="http://xkcd.com/"><img href="http://imgs.xkcd.com/logo.png" /></a>
```

---

## 5. Including JavaScript in HTML

**Quick Summary:**
- Use the `<script>` tag (not `<js>`, `<javascript>`, or `<scripting>`)
- Can link external file or include inline code
- Usually placed at end of `<body>` or in `<head>` with `defer`

```html
<!-- External JavaScript file -->
<script src="app.js"></script>

<!-- Inline JavaScript -->
<script>
  console.log('Hello, world!');
</script>
```

---

# PART 2: CSS FUNDAMENTALS

---

## 6. CSS Selectors

**Quick Summary:**
- Element selector: `div` → selects all `<div>` elements
- Class selector: `.classname` → selects elements with that class
- ID selector: `#idname` → selects the ONE element with that ID
- Universal selector: `*` → selects ALL elements
- Combined: `p.header` → `<p>` elements with class "header"

```css
/* Selects ALL div elements */
div {
  background-color: blue;
}

/* Selects elements with class="grid" */
.grid {
  font-size: 32px;
}

/* Selects THE element with id="title" */
#title {
  font-size: 32px;
}

/* Selects ALL elements on page */
* {
  padding: 50px;
}

/* Selects <p> elements that ALSO have class="header" */
p.header {
  color: green;
}
```

**Example - Setting only "yes" to green:**
```html
<p>no</p>
<p class="header">yes</p>
```
```css
/* Only affects the <p> with class="header" */
p.header { color: green; }
```

---

## 7. The CSS Box Model

**Quick Summary:**
- Order from inside out: **Content → Padding → Border → Margin**
- **Padding** = space INSIDE the border (between content and border)
- **Margin** = space OUTSIDE the border (between element and neighbors)
- Think: padding is like cushioning inside a box, margin is space between boxes

```
┌─────────────────────────────────────┐
│             MARGIN                  │
│   ┌─────────────────────────────┐   │
│   │         BORDER              │   │
│   │   ┌─────────────────────┐   │   │
│   │   │      PADDING        │   │   │
│   │   │   ┌─────────────┐   │   │   │
│   │   │   │   CONTENT   │   │   │   │
│   │   │   └─────────────┘   │   │   │
│   │   └─────────────────────┘   │   │
│   └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

```css
.review {
  padding: 20px;  /* Space INSIDE, around content */
  margin: 20px;   /* Space OUTSIDE, between elements */
}
```

---

## 8. Display Properties

**Quick Summary:**
- `block` = full width, new line (div, p, h1)
- `inline` = only needed width, no line break (span, a) — **span's default!**
- `flex` = flexbox layout (items in row by default)
- `grid` = grid layout

The `<span>` element has a default display value of **inline**.

```css
.container {
  display: flex;           /* Items arranged horizontally */
  justify-content: center; /* Center items horizontally */
}
```

```html
<div class="box">
  <img src="photo1.jpg" />
  <img src="photo2.jpg" />
  <img src="photo3.jpg" />
</div>
```
```css
.box {
  display: flex;
  justify-content: center;
}
```
This displays images **horizontally**, centered, using CSS flexbox.

---

## 9. Styling Elements by Type

**Quick Summary:**
- To style ALL divs: `div { }` (no prefix)
- To style by class: `.classname { }`
- To style by ID: `#idname { }`

```css
/* Change ALL div elements to have blue background */
div { 
  background-color: blue; 
}

/* WRONG ways: */
.div { background-color: blue; }  /* Selects class="div" */
#div { background-color: blue; }  /* Selects id="div" */
```

---

# PART 3: JAVASCRIPT FUNDAMENTALS

---

## 10. Variables and Arrow Functions

**Quick Summary:**
- `let` = can be reassigned, `const` = cannot be reassigned
- Arrow function: `const f = x => x * x` creates a FUNCTION, not a value
- `const f = x => x * x` means f(3) returns 9

```javascript
// Variables
let x = 5;      // Can be reassigned later
const y = 10;   // Cannot be reassigned

// Arrow Functions
const f = x => x * x;        // f is a FUNCTION that returns x squared
console.log(f(4));           // Output: 16

// Equivalent traditional function
function square(x) {
  return x * x;
}

// Arrow function with block body
const g = (x) => {
  return x * x;
};
```

---

## 11. Valid Function Syntax

**Quick Summary:**
- ✅ `function f(x) { }` — function declaration
- ✅ `const f = function(x) { }` — function expression
- ✅ `let execute = (x) => { }` — arrow function
- ❌ `function f(x) = { }` — can't use = with declaration
- ❌ `const function f(x) = { }` — invalid combination

```javascript
// VALID ways to create functions:
function f(x) { return x * 2; }           // Declaration
const f = function(x) { return x * 2; };  // Expression
let execute = (x) => { return x * 2; };   // Arrow function
const g = x => x * 2;                     // Arrow (concise)

// INVALID:
function f(x) = { }       // ❌ Can't use = 
const function f(x) = { } // ❌ Invalid syntax
```

---

## 12. JavaScript Objects

**Quick Summary:**
- Use curly braces `{ }`
- Properties separated by **commas** (not semicolons!)
- Key-value pairs use colons: `key: value`
- Can dynamically add new properties anytime

```javascript
// CORRECT - commas between properties
let o = { 
  number: 1, 
  value: "carrot", 
  features: ['orange', 'root'] 
};

// WRONG - semicolons instead of commas
let o = { number: 1; value: "carrot" };  // ❌

// WRONG - square brackets (that's array syntax)
let o = [ number: 1, value: "carrot" ];  // ❌

// WRONG - equals signs instead of colons
let o = { number=1, value="carrot" };    // ❌

// Dynamically adding properties - THIS IS VALID!
let squirrel = { hungry: true, sleeping: false };
squirrel.hasEaten = false;  // ✅ Works!
```

---

## 13. Array Methods: filter, map, reduce

**Quick Summary:**
- `filter()` = keeps elements that pass a test → returns array
- `map()` = transforms each element → returns array
- `reduce()` = combines all elements → returns single value

### filter() — Select elements passing a test
```javascript
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let b = a.filter(number => {
  return (number % 2 === 0)  // Keep only even numbers
});

console.log(b);  // Output: [2, 4, 6, 8, 10]
```

### map() — Transform each element
```javascript
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let e = a.map(number => {
  return (number - 1)  // Subtract 1 from each
});

console.log(e);  // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### reduce() — Combine into single value
```javascript
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let c = a.reduce((total, number) => {
  return (total + number)  // Sum all numbers
});

console.log(c);  // Output: 55 (1+2+3+...+10)
```

---

## 14. For Loops

**Quick Summary:**
- Three parts: initialization; condition; update
- Loop continues WHILE condition is true
- `i--` decrements after each iteration
- Loop stops when condition becomes false

```javascript
for (let i = 3; i > 0; i--) {
  console.log(i);
}
// Output: 3, 2, 1
// (NOT 0 — loop stops when i > 0 is false)

// Trace through:
// i=3, 3>0 true, log 3, i becomes 2
// i=2, 2>0 true, log 2, i becomes 1  
// i=1, 1>0 true, log 1, i becomes 0
// i=0, 0>0 FALSE, stop!
```

---

## 15. If Statements

**Quick Summary:**
- Use `===` for comparison (strict equality)
- Use `=` for assignment only (NOT in conditions!)
- Parentheses required around condition
- No `var` inside the condition

```javascript
// CORRECT
if (i === 10) {
  console.log("i is 10");
}

// WRONG - assignment, not comparison!
if (i = 10) { }  // ❌ This ASSIGNS 10 to i

// WRONG - no parentheses
if i === 10 { }  // ❌ Syntax error
```

---

# PART 4: DOM MANIPULATION

---

## 16. What is the DOM?

**Quick Summary:**
- DOM = Document Object Model
- Tree-structured representation of HTML used by browser
- JavaScript CAN modify the DOM
- Changes to DOM update what user sees

The DOM is a programming interface that represents the page as a tree of objects. JavaScript can read and modify this tree, which updates the displayed page.

---

## 17. Selecting Elements

**Quick Summary:**
- `getElementById('id')` — returns single element by ID
- `querySelector('.class')` — returns FIRST match (CSS selector syntax)
- `querySelectorAll('p')` — returns ALL matches
- Use `#` for ID, `.` for class in querySelector

```javascript
// By ID - returns single element
document.getElementById('header')

// By CSS selector - returns FIRST match
document.querySelector('#results')      // By ID
document.querySelector('.demo')         // By class
document.querySelector('p.demo')        // <p> with class "demo"

// Returns ALL matches as NodeList
document.querySelectorAll('p')
```

**Example - Setting specific text to "cow":**
```html
<p>no</p>
<p class="demo">yes</p>
<div class="demo">no</div>
```
```javascript
// Select the <p> that has class="demo"
document.querySelector("p.demo").textContent = "cow";
// Only changes "yes" to "cow"
```

---

## 18. Modifying Elements

**Quick Summary:**
- `.textContent` = change/get text
- `.style.color` = change CSS (must include `.style`!)
- Common mistake: forgetting `.style` before CSS property

```javascript
// Changing text content
document.querySelector('#results').textContent = "New text";
// Finds element with id="results" and CHANGES its text

// Changing styles - MUST use .style
document.getElementById('header').style.color = 'red';

// WRONG - missing .style!
document.getElementById('header').color = 'red';  // ❌

// WRONG - dot instead of nothing for getElementById
document.getElementById('.header').style.color = 'red';  // ❌
```

---

## 19. Event Listeners

**Quick Summary:**
- `addEventListener` attaches a function to run on an event
- First argument: event type ('click', 'submit', etc.)
- Second argument: function to call when event occurs

```javascript
// Finds element with id="get", calls loadPhoto when clicked
document.getElementById('get').addEventListener('click', loadPhoto);

// With inline arrow function
document.getElementById('btn').addEventListener('click', () => {
  console.log('Button clicked!');
});
```

---

# PART 5: PROMISES AND ASYNC/AWAIT

---

## 20. Understanding Promises

**Quick Summary:**
- Promises handle asynchronous operations
- Three states: pending, fulfilled (resolved), rejected
- `.then()` runs when resolved
- `.catch()` runs when rejected
- `.finally()` ALWAYS runs

```javascript
const p = new Promise((resolve, reject) => {
  // Async operation here
  if (success) {
    resolve(data);   // Triggers .then()
  } else {
    reject(error);   // Triggers .catch()
  }
});

p
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log('Done'));
```

---

## 21. Promise Execution Order

**Quick Summary:**
- Synchronous code runs FIRST (all of it)
- Async callbacks run AFTER sync code completes
- `setTimeout` doesn't block — schedules for later

```javascript
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('banana')
    resolve(true);
  }, 10000);
});

console.log('ski');
p.then((result) => console.log('fish'));
console.log('taco');

// Output: ski, taco, banana, fish
// 
// Why?
// 1. Promise created, setTimeout starts (doesn't block)
// 2. 'ski' prints immediately
// 3. .then() registered (waits for promise)
// 4. 'taco' prints immediately
// 5. After 10 seconds: 'banana' prints
// 6. Promise resolves, 'fish' prints
```

---

## 22. Promise Chains - Resolve vs Reject

**Quick Summary:**
- `resolve()` → runs through `.then()` chain, skips `.catch()`
- `reject()` → skips ALL `.then()`, goes to `.catch()`
- `.finally()` ALWAYS runs regardless

### When Promise Resolves:
```javascript
const p = new Promise((resolve, reject) => {
  resolve(true);
});

p
  .then((a) => console.log('A'))
  .then((b) => console.log('B'))
  .catch((c) => console.log('C'))
  .finally(() => console.log('D'));

// Output: A, B, D
// (C skipped because no rejection)
```

### When Promise Rejects:
```javascript
const p = new Promise((resolve, reject) => {
  reject(false);
});

p
  .then((a) => console.log('A'))
  .then((b) => console.log('B'))
  .catch((c) => console.log('C'))
  .finally(() => console.log('D'));

// Output: C, D
// (A, B skipped — jumps straight to catch)
```

---

## 23. Async/Await

**Quick Summary:**
- `async` function always returns a Promise
- `await` PAUSES execution until Promise settles
- Code AFTER await waits for the Promise
- try/catch handles rejections

```javascript
const a = async function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Oregon')
      resolve(true);
    }, 10000);
  })
}

try {
  console.log('Texas');
  await a();              // PAUSES here until promise resolves
  console.log('Utah')
} catch(e) {
  console.log('Ohio');
}

// Output: Texas, Oregon, Utah
//
// 1. 'Texas' prints
// 2. await PAUSES, waits for promise
// 3. After 10 seconds, 'Oregon' prints (inside promise)
// 4. Promise resolves, execution continues
// 5. 'Utah' prints
// 6. No error, so 'Ohio' never prints
```

---

# PART 6: NETWORKING FUNDAMENTALS

---

## 24. Default Ports

**Quick Summary:**
- HTTP = **Port 80** (unencrypted web traffic)
- HTTPS = **Port 443** (encrypted web traffic, the padlock icon)
- SSH = **Port 22** (secure remote shell access)

HTTP (Hypertext Transfer Protocol) uses port 80 as its default and transmits data in plain text, making it vulnerable to interception. HTTPS uses port 443 and adds TLS encryption for secure transmission of sensitive data like passwords. SSH (Secure Shell) uses port 22 for encrypted remote login and server administration.

---

## 25. HTTP Status Codes

**Quick Summary:**
- **3xx = Redirection** (resource moved, use cached version)
- **4xx = Client Error** (your request was wrong)
- **5xx = Server Error** (server failed to process valid request)

### 300 Range - Redirection
| Code | Meaning |
|------|---------|
| 301 | Moved Permanently |
| 302 | Found (Temporary Redirect) |
| 304 | Not Modified (use cache) |

### 400 Range - Client Errors
| Code | Meaning |
|------|---------|
| 400 | Bad Request (malformed syntax) |
| 401 | Unauthorized (need to authenticate) |
| 403 | Forbidden (authenticated but not allowed) |
| 404 | Not Found |

### 500 Range - Server Errors
| Code | Meaning |
|------|---------|
| 500 | Internal Server Error |
| 502 | Bad Gateway |
| 503 | Service Unavailable |
| 504 | Gateway Timeout |

---

## 26. HTTP Content-Type Header

**Quick Summary:**
- Tells receiver how to interpret the data
- `text/html` = HTML, `application/json` = JSON
- `text/css` = CSS, `application/javascript` = JS
- Can include charset: `text/html; charset=utf-8`

```javascript
// Express automatically sets Content-Type for JSON
res.json({ message: 'Hello' });  // Sets application/json

// Manual header setting
res.set('Content-Type', 'text/html');
res.send('<h1>Hello</h1>');
```

---

## 27. The Fetch Function

**Quick Summary:**
- Modern API for HTTP requests (replaced XMLHttpRequest)
- Returns Promise that resolves to Response object
- Must call `.json()` or `.text()` to get body (also returns Promise)
- **Only rejects on network failure**, NOT on 404/500 errors!

```javascript
// Basic GET request
fetch('https://api.example.com/data')
  .then(response => response.json())  // Parse JSON body
  .then(data => console.log(data))
  .catch(error => console.log('Network error:', error));

// POST request with JSON body
fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John' })
})
.then(response => {
  if (!response.ok) {
    throw new Error('HTTP error: ' + response.status);
  }
  return response.json();
});

// IMPORTANT: fetch does NOT reject on 404/500!
// Must check response.ok or response.status manually
```

---

# PART 7: COOKIES AND SECURITY

---

## 28. Cookie Security Attributes

**Quick Summary:**
- **Secure** = only sent over HTTPS (never HTTP)
- **HttpOnly** = JavaScript cannot access (prevents XSS theft)
- **SameSite** = controls cross-site sending (prevents CSRF)
  - `Strict` = never sent cross-site
  - `Lax` = sent with top-level navigation only
  - `None` = sent always (requires Secure)

```javascript
// Setting secure cookie in Express
res.cookie('sessionId', 'abc123', {
  secure: true,     // HTTPS only
  httpOnly: true,   // No JavaScript access
  sameSite: 'lax'   // Some CSRF protection
});
```

---

## 29. Secure Password Storage

**Quick Summary:**
- **NEVER** store passwords in plain text
- Use bcrypt (or Argon2, PBKDF2) to hash passwords
- Bcrypt automatically adds salt and is intentionally slow
- On login: hash the attempt and compare hashes

```javascript
const bcrypt = require('bcrypt');

// When creating account - HASH the password
const saltRounds = 10;
const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
// Store hashedPassword in database

// When logging in - COMPARE hashes
const isMatch = await bcrypt.compare(attemptedPassword, storedHash);
if (isMatch) {
  // Login successful
}
```

---

# PART 8: WEBSOCKETS

---

## 30. WebSocket Protocol

**Quick Summary:**
- Provides **bidirectional**, persistent connection
- Either client OR server can send messages anytime
- Better than polling for real-time apps (chat, games, live data)
- Uses `ws://` (or `wss://` for secure)

```javascript
// Frontend - Creating WebSocket connection
const socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
  console.log('Connected!');
  socket.send('Hello server');
};

socket.onmessage = (event) => {
  console.log('Received:', event.data);
};

// Backend (Node.js with 'ws' package)
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
  console.log('Client connected');
  
  ws.on('message', (message) => {
    console.log('Received:', message);
    ws.send('Hello client');  // Send back to this client
  });
});
```

---

# PART 9: EXPRESS.JS

---

## 31. Express Middleware Execution Order

**Quick Summary:**
- Middleware executes in the ORDER defined in code
- Each middleware gets `req`, `res`, `next`
- Must call `next()` to continue to next middleware
- If `next()` not called, request stops there

```javascript
const express = require('express');
const app = express();

// Middleware 1 - runs first for ALL requests
app.use((req, res, next) => {
  console.log('A');
  next();  // Continue to next middleware
});

// Middleware 2 - runs second
app.use((req, res, next) => {
  console.log('B');
  next();
});

// Route handler - runs if path matches
app.get('/api/document', (req, res) => {
  console.log('C');
  res.send('Document');
});

// GET /api/document logs: A, B, C
```

---

## 32. Express Service Returns

**Quick Summary:**
- Frontend fetch gets Response object (not data directly)
- Must call `response.json()` to parse JSON body
- Express `res.json()` sends JSON with correct Content-Type
- Check `response.ok` for error handling

```javascript
// Express backend
app.get('/api/user', (req, res) => {
  res.json({ name: 'John', age: 25 });
});

// Frontend fetch
const response = await fetch('/api/user');
const data = await response.json();  // Must parse!
console.log(data.name);  // 'John'
```

---

# PART 10: MONGODB

---

## 33. MongoDB Query Matching

**Quick Summary:**
- Queries are JSON-like objects: `{ field: value }`
- Exact matching by default (case-sensitive!)
- Multiple fields = implicit AND
- Use `$` operators for complex queries: `$gt`, `$lt`, `$in`, `$or`

```javascript
// Find documents where name is exactly 'Mark'
db.collection.find({ name: 'Mark' });
// Won't match: 'mark', 'Mark Smith', 'MARK'

// Multiple conditions (AND)
db.collection.find({ name: 'Mark', age: 25 });

// Using operators
db.collection.find({ age: { $gt: 21 } });           // age > 21
db.collection.find({ name: { $in: ['Mark', 'John'] } }); // name is Mark OR John
db.collection.find({ 
  $or: [{ age: 25 }, { age: 30 }] 
});
```

---

# PART 11: REACT

---

## 34. JSX (JavaScript XML)

**Quick Summary:**
- Lets you write HTML-like code in JavaScript
- Gets compiled to `React.createElement()` calls
- Embed JS expressions in curly braces: `{variable}`
- JSX is NOT HTML — it's syntactic sugar

```jsx
// JSX syntax
const element = <h1>Hello, {name}!</h1>;

// Compiles to:
const element = React.createElement('h1', null, 'Hello, ', name, '!');
```

---

## 35. React Components with Props

**Quick Summary:**
- Props = parameters passed to components
- Parent passes: `<Child name="Alice" age={25} />`
- Child receives: `function Child({ name, age })`
- String props use quotes, others use curly braces

```jsx
// Parent component
function App() {
  return <Welcome user="Alex" count={3} />;
}

// Child component receiving props
function Welcome({ user, count }) {
  return <div>{user} has {count} messages</div>;
}

// Output: "Alex has 3 messages"
```

---

## 36. React Component Composition

**Quick Summary:**
- Build complex UIs by combining simple components
- Components render other components
- Data flows DOWN through props
- Replace component tags with their output mentally

```jsx
function Header() {
  return <h1>Welcome</h1>;
}

function Content() {
  return <p>Main content here</p>;
}

function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

// Final output:
// <div>
//   <h1>Welcome</h1>
//   <p>Main content here</p>
// </div>
```

---

## 37. React.useState Hook

**Quick Summary:**
- Adds state to function components
- Returns `[currentValue, setterFunction]`
- Call setter to update state AND trigger re-render
- Use functional update when new state depends on old: `setState(prev => prev + 1)`

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);  // Initial value: 0
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      {/* Functional update (safer): */}
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment (safe)
      </button>
    </div>
  );
}
```

---

## 38. React Hooks Overview

**Quick Summary:**
- `useState` — local state
- `useEffect` — side effects (fetching, subscriptions)
- `useContext` — access context without prop drilling
- `useRef` — DOM refs or mutable values that don't trigger re-render
- Rules: only call at top level, only in React functions

```jsx
import { useState, useEffect, useRef, useContext } from 'react';

function Example() {
  // State
  const [data, setData] = useState(null);
  
  // Ref (doesn't cause re-render when changed)
  const inputRef = useRef(null);
  
  // Effect (runs after render)
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
      
    return () => {
      // Cleanup function (runs on unmount)
    };
  }, []); // Empty array = run once on mount
  
  // Context
  const theme = useContext(ThemeContext);
  
  return <div ref={inputRef}>{data}</div>;
}
```

---

## 39. React Router

**Quick Summary:**
- Enables SPA navigation (URL changes without page reload)
- `BrowserRouter` wraps app, `Routes` contains routes
- `Route` maps path to component
- `Link` for navigation (not `<a>` tags)

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

# PART 12: NODE.JS ECOSYSTEM

---

## 40. Node.js

**Quick Summary:**
- JavaScript runtime for server-side code
- Uses V8 engine (same as Chrome)
- Event-driven, non-blocking I/O (efficient for many connections)
- Foundation for npm, build tools, backend frameworks

Node.js allows JavaScript to run outside browsers, enabling backend development. It handles many concurrent connections efficiently using an event loop rather than creating threads for each request.

---

## 41. NPM (Node Package Manager)

**Quick Summary:**
- Default package manager for Node.js
- `npm install` reads package.json and installs dependencies
- `dependencies` = production, `devDependencies` = development only
- package-lock.json locks exact versions

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "vite build"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0"
  }
}
```

---

## 42. PM2 Process Manager

**Quick Summary:**
- Keeps Node apps running 24/7
- Auto-restarts on crash
- `pm2 start app.js` — start app
- `pm2 list` — show running processes
- `pm2 logs` — view logs
- `pm2 reload` — zero-downtime restart

PM2 runs Node.js applications as background processes (daemons), automatically restarting them if they crash and keeping them running after you disconnect from the server.

---

## 43. Vite Build Tool

**Quick Summary:**
- Modern frontend build tool (faster than Webpack)
- Uses native ES modules in development (instant startup)
- Uses Rollup for production builds
- Hot Module Replacement (HMR) for fast feedback

Vite serves source code directly during development without bundling, transforming files on-demand. For production, it bundles and optimizes using Rollup.

---

# PART 13: COMMAND LINE

---

## 44. Essential Commands

**Quick Summary:**
- `chmod` — change file permissions (mode bits)
- `ssh` — secure remote shell session
- `ls -la` — list ALL files in LONG format
  - `-l` = long listing (details)
  - `-a` = all files (including hidden)

```bash
# Change file permissions
chmod 755 script.sh    # rwx for owner, rx for others
chmod +x script.sh     # Add execute permission

# Connect to remote server
ssh user@hostname

# List files with details
ls -la    # Long format + all files (including .hidden)
```

---

## 45. JSON (JavaScript Object Notation)

**Quick Summary:**
- Data format for exchanging data (text-based)
- Server can send JSON to browser
- Contains attribute-value pairs
- Language-independent (works with any language, not just JS)
- NOT the same as JavaScript objects (JSON is a string format)

```json
{
  "name": "John",
  "age": 30,
  "hobbies": ["reading", "gaming"],
  "address": {
    "city": "Provo",
    "state": "UT"
  }
}
```

```javascript
// Parse JSON string to object
const obj = JSON.parse(jsonString);

// Convert object to JSON string
const json = JSON.stringify(obj);
```

---

# QUICK REVIEW: Common Exam Mistakes

| Mistake | Correct Answer |
|---------|---------------|
| `#` selects class | `#` = ID, `.` = class |
| Box model: margin, padding, border, content | Content → Padding → Border → Margin |
| `if (i = 10)` is comparison | Use `===` not `=` in conditions |
| `{ a: 1; b: 2 }` is valid | Use commas: `{ a: 1, b: 2 }` |
| `document.getElementById().color` | Need `.style.color` |
| Promise rejects on 404 | Fetch only rejects on network failure |
| `await` doesn't pause | `await` DOES pause until promise settles |
| Sync code runs after async | Sync code runs FIRST, always |
| `.catch()` always runs | `.catch()` only runs on rejection |
| `.finally()` only on success | `.finally()` ALWAYS runs |

---

*Good luck on your exam!*