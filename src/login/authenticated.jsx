import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';


export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  return (
    <div className="container-fluid">  
            <div className='playerName'>{props.userName}</div>
            <Button variant='primary' onClick={() => navigate('/read')}>
            Read
            </Button>
            <Button variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}
