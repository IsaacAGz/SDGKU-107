import "./Footer.css";

import { useContext } from 'react';

import globalContext from '../state/globalContext'

function Footer() {

    const userData = useContext(globalContext).user;

    return(
        <footer>
            <p>2026, Footer Company. All rights reserved. User: {userData.name}, Cohort: {userData.id}</p>
            <p>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact us</a>
            </p>
        </footer>
    )
}

export default Footer;