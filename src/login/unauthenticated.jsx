import React from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <>
      <div className="container-fluid">
          <form method="get" action="read.html">
              <div>
                <label className="form-label" for="email">Email:</label>
                <input className="form-control" type="text" placeholder="your@email.com" value={userName} onChange={(e) => setUserName(e.target.value)}/>
              </div>
              <div>
                <label className="form-label" for="password">Password:</label>
                <input className="form-control" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="container-fluid text-center">
                <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
                Login
                </Button>
                <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
                Create
                </Button>
              </div>
          </form> 
      </div>
      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
