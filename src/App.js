import React, { Component } from "react";
import CountryInfo from "./components/CountryInfo";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1> COVID-19 Data by Country </h1>
        <p> Hello there my friend </p>
        <CountryInfo title="Data">
         </CountryInfo>
      </div>
    );
  }
}

export default App;
