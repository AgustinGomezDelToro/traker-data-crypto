import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/" className="nav__link">
                            HOME
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/about" className="nav__link">
                            A propos
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/cryptos" className="nav__link">
                            Criptos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
