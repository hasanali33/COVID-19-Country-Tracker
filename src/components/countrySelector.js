import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

class CountrySelector extends Component {
    constructor(props) {
      super(props)
      this.state = {
        countries: []
      }
    }

    async componentDidMount() {
      //'https://api.covid19api.com/total/country/$(this.props.country)
      const url = "https://api.covid19api.com/countries";
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
            countries : data
              //confirmedCases: confirmedCases,
              //death: death,
              //recovered: recovered
      });
    }

    update() {
      // user clicks on country,
      // changes the inital country to new country
      // changes the countrydata to new countryData
      // checks if user chose same country, if not change the data
    }

    render() {
        return (
          <div>
              <select>
                {this.state.countries.map((country) => (
                    <option value={country.Slug} key={country.Slug}>{country.Country} </option>
                    <button onClick={() => sayHello('James')}>Greet</button>
                ))}
              </select>
            </div>
      );
    }
}

export default CountrySelector;
