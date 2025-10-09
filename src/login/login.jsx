import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export function Login() {
  return (
    <main>
        <div className="container-fluid">
          <div className="card">
          <h1 className="text-center">login for daily spiritual nourishment</h1>
          <div className="card-body">
          <form method="get" action="read.html">
            <div>
              <label className="form-label"for="email">Email:</label>
              <input className="form-control" type="text" placeholder="your@email.com" />
            </div>
            <div>
              <label className="form-label"for="password">Password:</label>
              <input className="form-control" type="password" placeholder="password" />
            </div>
            <div className="container-fluid text-center">
              <Button type="submit" variant="light">Login</Button>
              <Button type="submit" variant="light">Create</Button>
            </div>
          </form>
          <hr/>
            <p className="text-center">"It is written: ‘Man shall not live on bread alone, but on every word that comes from the mouth of God.’"</p>
            <p className="text-center">Matthew 4:4</p>
            </div>
          </div>
        </div>
    </main>
  );
}