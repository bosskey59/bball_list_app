import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Link, Switch} from "react-router-dom";
import './App.css';
import LocationIndex from './container/LocationIndex'
import LocationShow from './components/LocationShow'


export class App extends Component {
  state={
    locations:[]
  }

  addPlayer = (name, locationId) =>{
    console.log("sent")
     const data = { name , locationId}
    fetch("http://localhost:3000/players",{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(fetch("http://localhost:3000/locations")
        .then(res => res.json())
        .then(locations => this.setState({locations})))

  }

  componentDidMount(){
    fetch("http://localhost:3000/locations")
        .then(res => res.json())
        .then(locations => this.setState({locations}))
  }
  render() {
    console.log(this.state)
    return (
      <Router>
      {/* {this.state.locations.length > 0 ? */}
      <div>
      <Link to="/"><button>Home</button></Link>
      <Switch>
          <Route path="/locations/:id" render={({ match })=>(<LocationShow addPlayer={this.addPlayer} {...this.state.locations.find(l => l.id === parseInt(match.params.id))} />)} />  
          <Route path="/" render={ ()=>(<LocationIndex locations = {this.state.locations}/>)} /> 
      </Switch>
      </div>  
      {/* : <h1>Loading</h1>
    } */}
      
    </Router>
    )
  }
}

export default App;

