import React, { Component } from 'react'


class CountryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: null
      //confirmedCases: null,
      //death: null,
      //recovered: null
    };
  }


  onclick = (e) => {
    this.setState({
      countryData: this.state.g
    })
  }

  async componentDidMount() {
    //'https://api.covid19api.com/total/country/$(this.props.country)
    const url = `https://api.covid19api.com/total/country/${this.props.country}`;
    const response = await fetch(url);
    const data = await response.json();
      //fetch(`https://api.covid19api.com/total/country/${this.props.country}`)
      //  .then(response => response.json())
      //  .then(response => {
          // Fix this logic!
          //const countryData = response[response.length - 1];
          //const confirmedCases = countryData['Confirmed'];
          //const death = countryData['Deaths'];
          //const recovered = countryData['Recovered'];

    console.log(data)
    this.setState({
          countryData: data[data.length - 1]
            //confirmedCases: confirmedCases,
            //death: death,
            //recovered: recovered
    });
  }





  render() {

    if (!this.state.countryData) {
      return null;
    }
    return (
      <div>
        <h3> Country Name: {this.state.countryData.Country} </h3>
          <p> The number of positive cases is {this.state.countryData.Confirmed}. </p>
          <p> The number of individuals who have died {this.state.countryData.Deaths}. </p>
          <p> The number of individuals who have recovered {this.state.countryData.Recovered}. </p>
      </div>
    )
  }

}

// https://covidtracking.com/api/us
export default CountryInfo;
