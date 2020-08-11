import React, { Component } from 'react'

const API = 'http://covidtracking.com/api/us';

class CountryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positiveCases: null,
      hospitalizedcurrently: null,
      onventilatorcurrently: null,
      death: null,
      recovered: null
    };
  }

  async componentDidMount() {
      fetch('http://covidtracking.com/api/us')
        .then(response => response.json())
        .then(response => {
          // Fix this logic!
          const countryData = response[0];
          const positiveCases = countryData['positive'];
          const hospitalizedcurrently = countryData['hospitalizedCurrently'];
          const onventilatorcurrently = countryData['onVentilatorCurrently']
          const death = countryData['death'];
          const recovered = countryData['recovered'];

          this.setState({
            positiveCases: positiveCases,
            hospitalizedcurrently: hospitalizedcurrently,
            onventilatorcurrently: onventilatorcurrently,
            death: death,
            recovered: recovered
          });
        });
  }

  render() {
    return (
      <div>
        The number of positive cases is {this.state.positiveCases}.
        The number of negative cases is {this.state.hospitalizedcurrently}.
        The number of individuals currently on a ventilator {this.state.onventilatorcurrently}.
        The number of individuals who have died {this.state.death}.
        The number of individuals who have recovered {this.state.recovered}.
      </div>
    )
  }

}

// https://covidtracking.com/api/us
export default CountryInfo;
