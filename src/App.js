import React, { Component } from "react";
import CountryInfo from "./components/CountryInfo";
import CountrySelector from "./components/CountrySelector";
import Card from "./components/Chart/Card";


import "./App.css";

class App extends Component {
  state = {
    selectedCountryOfChoice: null
  }


  render() {
    return (
      <div className="wrapper">
        <h1> COVID-19 Data by Country </h1>
        <CountryInfo country={this.state.selectedCountryOfChoice} />
        <CountrySelector />
        <Card />
      </div>
    );
  }
}

export default App;
