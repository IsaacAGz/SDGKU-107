import { NavLink } from "react-router";
import { useContext } from 'react';

import GlobalContext from '../state/globalContext';
import "./Navbar.css";

function Navbar() {
    const userInformation = useContext(GlobalContext).user;

    return (
        <nav className="navbar navbar-expand-lg navbar-light store-navbar">
            <NavLink className="navbar-brand" to="/">
                Store
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" end>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/catalog">Catalog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin">Admin</NavLink>
                    </li>
                </ul>
            </div>
                {userInformation.name}
            <div>

            </div>
        </nav>
    );
}

export default Navbar