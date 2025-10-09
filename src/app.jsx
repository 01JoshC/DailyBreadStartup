import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Leaderboard } from './leaderboard/leaderboard';
import { Read } from './read/read';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
        <div className="body">
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <h1 className="navbar-brand">&#x1F956; Daily Bread </h1>
                        <menu>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="read">Read</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="leaderboard">Leaderboard</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="about">About</NavLink></li>
                        </ul>
                        </menu>
                    </div>
                </nav>
                <hr/>
            </header>

             <main>App components go here</main>

            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/read' element={<Read />} />
                <Route path='/leaderboard' element={<Leaderboard />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer>
                <hr/>
                <div className="container-fluid text-center">
                    <span className="text-center text-reset">Joshua Christensen</span>
                    <br />
                    <a href="https://github.com/01JoshC/BiblePowerStartup.git">GitHub</a>
                </div>
            </footer>

        </div>
    </BrowserRouter>
  );
}

function NotFound() {
    return (
        <main className = "container-fluid bg-secondary text-center"> 404: Return to sender. Address unknown.</main>
    );
}