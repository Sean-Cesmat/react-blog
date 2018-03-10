import React, {Component} from 'react';
const axios = require('axios');

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    // Save a reference to 'this' because the value of "this" will change
    // Inside the different callback functions
    var base = this

    // the url for our api
    let poemApi = 'http://shakeitspeare.com/api/poem'

    //our fetch of that poemApi
    // fetch(poemApi)
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((json) => {
    //     base.setState({shakespeare: json.poem})
    //   }).catch((error) => {
    //     console.log('An error occurred while parsing!', error)
    //   })

    // axios.get(poemApi)
    //   .then((response) => {
    //     base.setState({shakespeare: response.data.poem})
    //   })
    //   .catch((error) => {
    //     console.log('An error occurred while parsing!', error)
    //   })

      axios({
        method: 'GET',
        url: poemApi,

      })
      .then((response) => {
          base.setState({shakespeare: response.data.poem})
      })
      .catch((error) => {
          console.log('An error occurred while parsing!', error)
        })
  }

  render() {
    let poetry = ''
    if (this.state.shakespeare) {
      poetry = this.state.shakespeare
    } else {
      poetry = 'Loading...'
    }

    return (
      <div className="Post">
        <header className="Post-header">
          <h1 className="Post-title">Welcome to the homepage!</h1>
        </header>
        <p className="Post-intro">
          {poetry}
        </p>
      </div>
    )
  }
}

export default Home;
