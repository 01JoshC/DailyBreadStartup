import React from 'react';

import Button from 'react-bootstrap/Button';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  return (
    <>
    <div className="container-fluid">
        <form method="get" action="read.html">
            <div>
              <label className="form-label"for="email">Email:</label>
              <input className="form-control" type="text" placeholder="your@email.com" onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div>
              <label className="form-label"for="password">Password:</label>
              <input className="form-control" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="container-fluid text-center">
              <Button type="submit" variant="light" onClick={() => loginUser()} disabled={!userName || !password} >Login</Button>
              <Button type="submit" variant="light" onClick={() => createUser()} disabled={!userName || !password}>Create</Button>
            </div>
        </form> 
    </div>
    </>
  );
}
