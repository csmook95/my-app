import { useState, useEffect } from "react"

function Component() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch(`https://api.coinpaprika.com/v1/tickers`)
            .then(res => res.json())
            .then(res => {
                setCoins(res);
                setLoading(false)
            })
    }, [])

    type Coin = {
        id: string,
        name: string,
        symbol: string,
        rank: number,
        circulating_supply: number,
        total_supply: number,
        max_supply: number,
        beta_value: number,
        first_data_at: string,
        last_updated: string,
        quotes: {
            USD: {
                price: number,
                volume_24h: number
                volume_24h_change_24h: number
                market_cap: number
                market_cap_change_24h: number
                percent_change_15m: number
                percent_change_30m: number
                percent_change_1h: number
                percent_change_6h: number
                percent_change_12h: number
                percent_change_24h: number
                percent_change_7d: number
                percent_change_30d: number
                percent_change_1y: number
                ath_price: number
                ath_date: string
                percent_from_price_ath: number
            }
        }
    }

    return (
        <div>
            <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
            {loading
                ? <strong>Loading...</strong>
                : <ul>
                    {coins.map(({ id, name, symbol, quotes }: Coin) => (
                        <li
                            key={id}>
                            {name} ({symbol}): ${quotes.USD.price} USD
                        </li>
                    ))}
                </ul>}
        </div>
    )
}

export default Component