import React from 'react'
import ListCard from "./ListCard"
import {Context} from '../Store'

export default function LocationShow(props) {

  const [AppStore, updateState] = React.useContext(Context)

  const fetchLocations = () => {
    fetch("http://localhost:3000/locations")
    .then(res => res.json())
    .then(locations => updateState({type:"SET_LOCATIONS", locations}))

  }

  const addPlayer = (event) =>{
    event.preventDefault()
    const data = {name:document.getElementById("playerName").value, locationId:props.id}
    fetch("http://localhost:3000/players",{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(player => fetchLocations())
  }
  
    return (
        <div>
          <h2>Court Name: {props.name}</h2>
          <h3>Court Style: {props.indoor ? "Indoor":"Outdoor"}</h3>
          <h3>Number of Courts: {props.number_of_courts}</h3>
          
          {(props.lists.length > 0) ? props.lists.map((list) => <ListCard key={list.id} list={list}/>) : <h1>No Lists Found!</h1>}
          <form onSubmit={addPlayer}>
            <label>Name</label>
            <input type="text" id="playerName"/>
            <input type="submit" value="Add Player"/>
        </form>
        </div>
    )
}
