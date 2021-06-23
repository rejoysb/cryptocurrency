import React, { useEffect, useState } from "react";
import "../app.css";
import Axios from "axios";
import { useHistory } from "react-router-dom";

export default function MainPage() {
  const [currencyList, setCurrencyList] = useState([]);
  useEffect(() => {
    Axios.get("https://api.coinlore.net/api/tickers/?start=0&limit=10").then(
      (response) => {
        setCurrencyList(response.data["data"]);
      }
    );
  }, []);
  let history = useHistory();
  return (
    <>
      <div className="App">
        <h1 id="heading">Cryptobhumi</h1>
      </div>
      <div id="currencyList">
        {currencyList.map((data, key) => {
          return (
            <div
              className="currencyListSub"
              onClick={() => {
                history.push(`/currency/${data.id}`);
              }}
              key={key}
            >
              <h2>{data.symbol}</h2>
              <h2>{data.price_usd}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
