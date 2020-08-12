import React, { Component } from 'react';

class CountrySelector extends Component {
    constructor(props) {
      super(props)
      this.state = {
        countries: []
      }
    }
    async componentDidMount() {
      //'https://api.covid19api.com/total/country/$(this.props.country)
        fetch("https://api.covid19api.com/countries")
          .then(response => response.json())
          .then(response => {



            this.setState({
              countries: response
            });
          });
    }

    render() {
        return (
            <select>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
        )
    }
}

export default CountrySelector;
