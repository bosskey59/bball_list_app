import React from 'react'
import ListCard from "./ListCard"
import SignUp from "./SignUp"

export default function LocationShow(props) {
  console.log(props.lists)
    return (
        <div>
          <h2>Court Name: {props.name}</h2>
          <h3>Court Style: {props.indoor ? "Indoor":"Outdoor"}</h3>
          <h3>Number of Courts: {props.number_of_courts}</h3>
          
          {/* {(!!props.lists) ? props.lists.map((list) => <ListCard key={list.id} list={list}/>) : <h1>No Lists Found!</h1>} */}
          {props.lists.map((list) => <ListCard key={list.id} list={list}/>)}

          <SignUp addPlayer ={props.addPlayer} locationID={props.id} />
        </div>
    )
}
