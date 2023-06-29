import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import "../About.css";

function About() {
    return (
        <div>
            <Header />
            <div className="about-container">
                <h1>A propos</h1>
                <p>BONJOUR BONHOMME</p>
                <p>Pour découvrir les dernières informations du marché des cryptomonnaies, rendez-vous sur la page <Link to="/cryptos">Criptos</Link>.</p>
            </div>
        </div>
    )
}

export default About;
