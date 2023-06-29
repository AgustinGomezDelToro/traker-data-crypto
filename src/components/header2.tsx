import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";

function Header2() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/cryptos/list" className="nav__link">
                            LISTE
                        </Link>
                    </li>

                    <li className="nav__item">
                        <Link to="/cryptos/detail/1" className="nav__link">
                            Détail d'une crypto
                        </Link>
                    </li>

                    <li className="nav__item">
                        <Link to="/cryptos/rank" className="nav__link">
                            Classement des cryptos
                        </Link>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Header2;
