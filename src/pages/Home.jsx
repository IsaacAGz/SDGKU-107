import './Home.css';
import { Link } from 'react-router';

function Home() {
    return (
        <main className="home-page">
            <p className="home-kicker">Course 109 store</p>
            <h1>Welcome to the shop</h1>
            <p className="home-lead">
                A small catalog of everyday items, from fruit to office supplies.
                Browse the products, pick a quantity, and add them to your cart.
            </p>
            <Link className="home-cta" to="/catalog">View the catalog</Link>

            <section className="home-highlights">
                <article>
                    <h2>Fresh picks</h2>
                    <p>Oranges and other simple goods, each listed with a clear price.</p>
                </article>
                <article>
                    <h2>Easy cart</h2>
                    <p>Choose how many you want, then see the total update under the list.</p>
                </article>
                <article>
                    <h2>Built in class</h2>
                    <p>Made for Cohort 71 as a practice React store.</p>
                </article>
            </section>
        </main>
    );
}

export default Home;
