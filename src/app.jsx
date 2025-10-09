import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="body bg-dark text-light">
         <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h1 className="navbar-brand">&#x1F956; Daily Bread </h1>
                    <menu>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="read.html">Read</a></li>
                        <li className="nav-item"><a className="nav-link" href="leaderboard.html">Leaderboard</a></li>
                        <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                    </ul>
                    </menu>
                </div>
            </nav>
            <hr/>
        </header>


        <footer>
            <hr/>
            <div className="container-fluid text-center">
                <span className="text-center text-reset">Joshua Christensen</span>
                <br />
                <a href="https://github.com/01JoshC/BiblePowerStartup.git">GitHub</a>
            </div>
        </footer>

    </div>)
  ;
}