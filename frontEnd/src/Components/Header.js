import React from 'react'
import {Link } from 'react-router-dom';

function Header(){
    return(

        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-5">
            <Link to={'/'} className="navbar-brand px-5 ">Users List</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link ml-3">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/create'} className="nav-link ml-3">Create</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/list'} className="nav-link ml-3">Users List</Link>
                </li>
                </ul>
            </div>
            </nav>
        </header>

    )
}

export default Header