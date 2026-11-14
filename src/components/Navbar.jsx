import { NavLink } from "react-router";
import { useContext, useState } from 'react';
import { IconShoppingCart, IconMenu2, IconX } from '@tabler/icons-react';

import GlobalContext from '../state/globalContext';
import "./Navbar.css";

const links = [
    { to: "/", label: "Home", end: true },
    { to: "/catalog", label: "Catalog" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/admin", label: "Admin" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const cart = useContext(GlobalContext).cart;

    // Total number of items, counting quantities (2 oranges + 1 pencil = 3)
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    // Each time the count goes up, bump a counter. Using it as a React key
    // remounts the icon and badge, which replays their CSS animation.
    const [prevCount, setPrevCount] = useState(itemCount);
    const [bumpKey, setBumpKey] = useState(0);
    if (itemCount !== prevCount) {
        setPrevCount(itemCount);
        if (itemCount > prevCount) setBumpKey(key => key + 1);
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <nav className="store-navbar">
            <NavLink className="navbar-brand" to="/" onClick={closeMenu}>
                Store
            </NavLink>

            <div className="store-nav-actions">
                <NavLink
                    to="/cart"
                    className="btn-subtle theme-inverse store-cart-link"
                    onClick={closeMenu}
                    aria-label={`Cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
                >
                    <span key={"icon" + bumpKey} className={bumpKey > 0 ? "store-cart-icon bump" : "store-cart-icon"}>
                        <IconShoppingCart />
                    </span>
                    {itemCount > 0 && (
                        <span key={"badge" + bumpKey} className="store-cart-badge" aria-hidden="true">
                            {itemCount > 99 ? "99+" : itemCount}
                        </span>
                    )}
                </NavLink>

                <button
                    type="button"
                    className="store-nav-toggle"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="store-nav-menu"
                    onClick={() => setMenuOpen(open => !open)}
                >
                    {menuOpen ? <IconX /> : <IconMenu2 />}
                </button>
            </div>

            {/* The outer div animates the height; the list inside holds the links */}
            <div id="store-nav-menu" className={"store-nav-panel" + (menuOpen ? " open" : "")}>
                <ul className="store-nav-menu">
                    {links.map((link, i) => (
                        <li key={link.to} style={{ "--i": i }}>
                            <NavLink className="nav-link" to={link.to} end={link.end} onClick={closeMenu}>
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
