import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png';

const Header = () => {
    return (

        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}

                <a className="navbar-brand" href="/home">
                    <img src={logo} alt="" />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                            {/* <a className="nav-link" href="/home">Home</a> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Donation</a>
                        </li>
                        <li className="nav-item">
                            {/* <Link to="/selectedEvent"><a className="nav-link" href="#">Events</a></Link> */}
                            <a className="nav-link" href="/selectedEvent">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>

                    </ul>
                    <Link to="/login"><button type="button" className="btn btn-primary mr-2">Register</button></Link>
                    <br />
                    <Link to="/admin"><button type="button" className="btn btn-dark">Admin</button></Link>
                </div>
            </nav>
        </div>

    );
};

export default Header;