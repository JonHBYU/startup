import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Register } from './register/register';
import { Login } from './login/login';
import { Landing } from './landing/landing';
import { Start } from './start/start';
import { Processing } from './processing/processing';
import { Update } from './update/update';
import { Finished } from './finished/finished';
import './app.css';

export default function App() {
    return (
        <BrowserRouter>
            <div className="body bg-dark text-light">
                <header className="container-fluid">
                    <nav className="navbar fixed-top navbar-dark">
                        <div className="navbar-brand">
                            Simon<sup>&reg;</sup>
                        </div>
                        <menu className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="">
                                    Delete Account
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="login">
                                    Logout
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="landing">
                                    Quit
                                </NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Register />} exact />
                    <Route path='/login' element={<Login />} />
                    <Route path='/landing' element={<Landing />} />
                </Routes>

                <footer className="bg-dark text-white-50">
                    <div className="container-fluid">
                        <span className="text-reset">Author Name(s)</span>
                        <a className="text-reset" href="https://github.com/webprogramming260/simon-react">
                            Source
                        </a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}