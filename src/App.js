import React from "react";
import "./app.css";
import Axios from "axios";
import MainPage from "./Routes/Mainpage";
import Currency from "./Routes/Currency";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact render={(props) => <MainPage />} />
        <Route path="/currency/:id" render={(props) => <Currency />} />
      </Router>
    </div>
  );
}

export default App;
