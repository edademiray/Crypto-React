import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Coins from './coins';



function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`).then((res) => {
        setCoins(res.data);
        console.log(res.data);
      }).catch((err) => console.log(err));
  }, []);


  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <div className="coin-app">
        <div className="coinSearch">
          <h1 className="coin-text">Güncel Kripto Piyasaları</h1>
          <form>
            <input
              type="text"
              placeholder="Arama"
              className="coin-input"
              onChange={handleChange}
            />
          </form>
        </div>
        {filteredCoins.map((coin) => {
          return (
            <Coins
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
