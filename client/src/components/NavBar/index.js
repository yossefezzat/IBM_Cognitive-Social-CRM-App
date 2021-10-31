import React from 'react';
import './style.css';
import logo from "./assets/logo.png";
import { NavLink } from 'react-router-dom';
export default class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <NavLink className="navbar-brand ml-5" to="/charts"> <img src={logo} width="100" height="50" /> </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"
                            data-toggle="collapse"
                            data-target=".navbar-collapse.show">
                            <NavLink to="/"
                                exact={true}
                                activeClassName="current"
                                className="btn btn-primary">Charts</NavLink>
                        </li>
                        <li className="nav-item"
                            data-toggle="collapse"
                            data-target=".navbar-collapse.show">
                            <NavLink to="/tweets"
                                activeClassName="current"
                                className="btn btn-primary">Tweets</NavLink>
                        </li>
                        <li className="nav-item"
                            data-toggle="collapse"
                            data-target=".navbar-collapse.show">
                            <NavLink to="/about"
                                activeClassName="current"
                                className="btn btn-primary">About</NavLink>
                        </li>
                    </ul>

                </div>
            </nav>)

    }
}