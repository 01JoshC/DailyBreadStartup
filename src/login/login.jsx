import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { AuthState } from './authState';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main>
        <div className="container-fluid">
          <div className="card">
          <h1 className="text-center">login for daily spiritual nourishment</h1>
          <div className="card-body">

            {authState !== AuthState.Unknown && <h1></h1>}
            {authState === AuthState.Authenticated && (<Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
          )}
            {authState === AuthState.Unauthenticated && (<Unauthenticated userName={userName} onLogin={(loginUserName) => {onAuthChange(loginUserName, AuthState.Authenticated);}}
                     />
                   )} 
          <hr/>
            <p className="text-center">"It is written: ‘Man shall not live on bread alone, but on every word that comes from the mouth of God.’"</p>
            <p className="text-center">Matthew 4:4</p>
            </div>
          </div>
        </div>
    </main>
  );
}