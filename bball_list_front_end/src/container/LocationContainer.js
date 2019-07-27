import React from 'react'
import {Route,Link, Switch} from "react-router-dom";
import {Context} from '../Store'
import LocationIndex from '../container/LocationIndex'
import LocationShow from '../components/LocationShow'

export default function LocationContainer() {

    const [AppStore, updateState] = React.useContext(Context)

    const fetchLocations = () => {
        fetch("http://localhost:3000/locations")
        .then(res => res.json())
        .then(locations => updateState({type:"SET_LOCATIONS", locations}))

    }

    React.useEffect(
        fetchLocations,
        []
    )

    return (
        <>
        {AppStore.locations.length > 0 ? 
            <div>
                <Link to="/"><button>Home</button></Link>
                <Switch>
                    <Route path="/locations/:id" render={({ match })=>(<LocationShow {...AppStore.locations.find(l => l.id === parseInt(match.params.id))} />)} />  
                    <Route path="/" render={ ()=>(<LocationIndex locations = {AppStore.locations}/>)} /> 
                </Switch>
            </div>  
            : <h1>Loading</h1>
        } 
        </> 
    )
    
}
