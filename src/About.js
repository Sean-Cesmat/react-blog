import React, { Component } from 'react';
const axios = require('axios');


class About extends Component {
  constructor(props) {
    super(props)
    this.state ={
      zip: '98126',
      weather: '',
      city:  '',
      temp: '',
    }
    this.handleZipClick = this.handleZipClick.bind(this)
  }

  handleZipClick = (e) => {
    let weatherApi = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`

    axios.get(weatherApi)
    .then((response) => {
      // console.log(response)
      this.setState({city: response.data.name, temp: Math.floor(parseInt(response.data.main.temp)*9/5-459.67) })
    })
  }

  componentDidMount() {

    let weatherApi = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`

    axios.get(weatherApi)
    .then((response) => {
      // console.log(response)
      this.setState({city: response.data.name, temp: Math.floor(parseInt(response.data.main.temp)*9/5-459.67) })
    })
  }

  render() {
    var weatherObj = ''
    if (this.state.weather) {
      weatherObj = this.state.weather
    } else {
      weatherObj = 'Loading...'
    }

    return (
      <div className="Post">
        <header className="Post-header">
          <h1 className="Post-title">About Page!</h1>
        </header>
        <input type="text"  />
        <button onClick={this.handleZipClick}>Get My Forecast</button>
        <p className="Post-intro">
          I'm super cool... thats all you need to know about me.
        </p>
        <p>{this.state.city}</p>
        <p>{this.state.temp}</p>


      </div>
    )
  }
}
export default About;
//
