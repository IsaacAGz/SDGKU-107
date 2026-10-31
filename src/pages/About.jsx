import { useContext } from 'react';
import { Link } from 'react-router'

import GlobalContext from '../state/globalContext';

import './About.css';

function About() {
    const userInformation = useContext(GlobalContext).user;

    return (
        <main className="about-page">
            <h1>About us</h1>
            <p className="about-lead">
                This store is a class project for Cohort 71, Course 109.
                It has been in progress since 2026.
            </p>

            <p>My name is {userInformation.name}</p>
            <p>Cohort {userInformation.id}</p>

            <Link to="/catalog" className="btn-solid theme-inverse m-5">Visit Catalog</Link>

            <div className="about-cards">
                <article>
                    <h2>What we sell</h2>
                    <p>A short list of products: fruit, household items, and office supplies.</p>
                </article>
                <article>
                    <h2>How it works</h2>
                    <p>Open the catalog, set a quantity, and add items. The cart total is calculated on the page.</p>
                </article>
                <article>
                    <h2>Why it exists</h2>
                    <p>To practice React pages, routing, components, and simple styling.</p>
                </article>
            </div>
        </main>
    );
}

export default About;
