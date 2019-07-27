import React, { Component } from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import LocationContainer from './container/LocationContainer'
import Store from './Store'


export class App extends Component {

  // componentDidMount(){
  //   fetch("http://localhost:3000/locations")
  //       .then(res => res.json())
  //       .then(locations => this.setState({locations}))
  // }
  render() {
    return (
      <Store>
        <Router>
          <LocationContainer/>
        </Router>
      </Store>
    )
  }
}

export default App;

