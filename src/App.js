import React, { Component } from "react";
import CountryInfo from "./components/CountryInfo";
import CountrySelector from "./components/CountrySelector";

import "./App.css";

class App extends Component {
  state = {
    selectedCountryOfChoice: "south-africa"
  }


  render() {
    return (
      <div className="wrapper">
        <h1> COVID-19 Data by Country </h1>
        <CountryInfo country={this.state.selectedCountryOfChoice} />
        <CountrySelector />
      </div>
    );
  }
}

export default App;
