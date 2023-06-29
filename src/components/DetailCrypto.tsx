import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface CryptoDetail {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

interface RouteParams {
    cryptoRank?: string;
}

function DetailCrypto() {
    const [cryptoDetail, setCryptoDetail] = useState<CryptoDetail | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { cryptoRank } = useParams<Record<string, string | undefined>>();
    const numCryptoRank = cryptoRank ? parseInt(cryptoRank, 10) : 0;




    useEffect(() => {
        fetchData();
    }, [numCryptoRank]);

    const fetchData = async () => {
        try {
            const response = await axios.get<CryptoDetail[]>('https://api.coinpaprika.com/v1/coins');
            const filteredCrypto = response.data.find(crypto => crypto.rank === numCryptoRank);
            if (filteredCrypto) {
                setCryptoDetail(filteredCrypto);
            }
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    if (!cryptoDetail) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Détail d'une crypto</h2>
            <p>Name: {cryptoDetail.name}</p>
            <p>Symbol: {cryptoDetail.symbol}</p>
            <p>Rank: {cryptoDetail.rank}</p>
        </div>
    );
}

export default DetailCrypto;
