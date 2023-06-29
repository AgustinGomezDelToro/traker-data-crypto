import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CryptoList.css';
import Header2 from "./header2";

interface Crypto {
    rank: string;
    name: string;
    symbol: string;
    type: string;
}

function CryptoList() {
    const [cryptoList, setCryptoList] = useState<Crypto[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get<Crypto[]>('https://api.coinpaprika.com/v1/coins');
            setCryptoList(response.data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h2>Liste des cryptos</h2>
            {cryptoList.length > 0 ? (
                <ul className="crypto-list">
                    {cryptoList.slice(0, 50).map((crypto, index) => (
                        <React.Fragment key={index}>
                            <li className="crypto-rank">{crypto.rank}</li>
                            <li className="crypto-name">{crypto.name}</li>
                            <li className="crypto-symbol">{crypto.symbol}</li>
                            <li className="crypto-type">{crypto.type}</li>
                        </React.Fragment>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default CryptoList;
