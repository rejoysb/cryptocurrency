import React, { useEffect, useState } from "react";
import "../app.css";
import Axios from "axios";
import { useParams } from "react-router-dom";

export default function Currency() {
  const [currency, setCurrency] = useState({
    name: "",
    symbol: "",
    price_usd: 0,
  });
  let { id } = useParams();
  useEffect(() => {
    Axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`).then(
      (response) => {
        setCurrency(response.data[0]);
      }
    );
  }, []);

  return (
    <div>
      <h1>{currency.name}</h1>
      <h1>{currency.symbol}</h1>
      <h1>{currency.price_usd}</h1>
    </div>
  );
}
