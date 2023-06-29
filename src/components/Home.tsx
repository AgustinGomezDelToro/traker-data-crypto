import React from "react";
import Header from "./header";
import "../Home.css";

function Home() {
    const handleClickHome = () => {
        window.alert("aie aie aie");
    };

    return (
        <div className="container">
            <Header />
            <h1 onClick={handleClickHome}>Bienvenue sur la meilleure page pour consulter les meilleures cryptos</h1>
            <p>Notre application vous permet de suivre les derniers prix des cryptomonnaies, de comparer différentes cryptos, de consulter les classements et bien plus encore. Profitez d'une expérience complète pour rester informé sur le monde des cryptomonnaies.</p>
        </div>
    );
}

export default Home;
