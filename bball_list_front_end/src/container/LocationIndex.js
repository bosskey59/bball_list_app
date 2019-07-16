import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class LocationIndex extends Component {

    render() {
        return (
            <ul>
               {this.props.locations.map(location => <li key={location.id}> <Link to={`locations/${location.id}`}>{location.name}</Link></li>)}
            </ul>
        )
    }
}
