import './NotFound.css';
import { Link } from 'react-router';
import { IconTool, IconCode } from '@tabler/icons-react';

function NotFound() {
    return (
        <main className="not-found-page">
            <IconTool size={50} color="red" stroke={2}/>
            
            <h1>Page not found</h1>
            <p>That address is not part of the store. Head back home or open the catalog.</p>
            <div className="not-found-links">
                <Link to="/">Go home</Link>
                <Link to="/catalog">Browse products</Link>
            </div>
            <IconCode className='m-5 'size={50} color="green" stroke={2}/>
        </main>
    );
}

export default NotFound;
