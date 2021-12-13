



function Coins({ name, image, symbol, volume, price, priceChange, marketCap }) {
    return (
        <div className="coin-row">
            <div className="coin">
                <img src={image} alt="crypto" />
                <h2 className="coinnameh2">{name}</h2>
                <p className="coin-symbol">{symbol}</p>
            </div><br/>
            <div className="coindata">
                <p className="coinprice"> ${price}</p>
                {priceChange < 0 ?
                 (<p className="coinpercent red">{priceChange.toFixed(2)}% Oranda Düşüşte. </p>
                ) : (
                  <p className="coinpercent green">{priceChange.toFixed(2)}% Oranda Artmakta. </p>
                )}
            </div>

        </div>
    )
}

export default Coins;