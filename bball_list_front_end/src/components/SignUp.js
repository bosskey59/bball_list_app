import React from 'react'

export default function SignUp(props) {

    const sendPlayer = (e) =>{
        e.preventDefault()
        const playerField = document.getElementById("playerName")
        props.addPlayer(playerField.value, props.locationID)
        playerField.value = ""

    }
    return (
        <form onSubmit={sendPlayer}>
            <label>Name</label>
            <input type="text" id="playerName"/>
            <input type="submit" value="Add Player"/>
        </form>
    )
}
