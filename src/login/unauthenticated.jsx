import React from 'react';

import Button from 'react-bootstrap/Button';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');

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
              <label className="form-label"for="email">Email:</label>
              <input className="form-control" type="text" placeholder="your@email.com" onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div>
              <label className="form-label"for="password">Password:</label>
              <input className="form-control" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="container-fluid text-center">
              <Button type="submit" variant="light" onClick={() => loginOrCreate('/api/auth/login')} disabled={!userName || !password} >Login</Button>
              <Button type="submit" variant="light" onClick={() => loginOrCreate('/api/auth/create')} disabled={!userName || !password}>Create</Button>
            </div>
        </form> 
    </div>
    </>
  );
}
