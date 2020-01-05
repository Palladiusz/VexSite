import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-dark">
            <div className="container-fluid">
                <div className="navbar-header">
                    <h1>Vex Site</h1>
                </div>

                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-lg nav-right-elem">
                        <Link to="/">HOME</Link>
                    </button>
                    <button
                        type="button"
                        className="btn btn-lg nav-right-elem dropdown-toggle mid-btn"
                        data-toggle="dropdown">
                        <Link to="/about">ABOUT</Link>
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item nav-right-elem" href="#">Action</a>
                        <a className="dropdown-item nav-right-elem" href="#">Another action</a>
                        <a className="dropdown-item nav-right-elem" href="#">Something else here</a>
                    </div>
                    <button
                        type="button"
                        className="btn btn-lg nav-right-elem mid-btn">
                        <Link to="/create">CREATE</Link>
                    </button>
                    <button type="button" className="btn btn-lg nav-right-elem">
                        <Link to="/contact">CONTACT</Link>
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;