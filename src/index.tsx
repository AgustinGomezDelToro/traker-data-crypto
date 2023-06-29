import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './components/Home';
import About from './components/About';
import CryptoList from './components/CryptoList';
import DetailCrypto from './components/DetailCrypto';
import RankListe from "./components/RankListe";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/Cryptos" element={<App />}>
                    <Route path="list" element={<CryptoList />} />
                    <Route path="detail/:cryptoRank" element={<DetailCrypto />} />
                    <Route path="rank" element={<RankListe />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
