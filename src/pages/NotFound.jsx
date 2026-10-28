import './NotFound.css';
import { Link } from 'react-router';

function NotFound() {
    return (
        <main className="not-found-page">
            <p className="not-found-code">404</p>
            <h1>Page not found</h1>
            <p>That address is not part of the store. Head back home or open the catalog.</p>
            <div className="not-found-links">
                <Link to="/">Go home</Link>
                <Link to="/catalog">Browse products</Link>
            </div>
        </main>
    );
}

export default NotFound;
