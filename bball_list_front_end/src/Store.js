import React from 'react'

const Context = React.createContext();

export {Context}


function reducer (state, action){
    switch (action.type){
        case 'SET_LOCATIONS':
            return {locations: action.locations}
        default:
            return state
    }
}

function Store(props) {

    const stateHook = React.useReducer(reducer, {locations:[]})

    return (
        <Context.Provider value={stateHook}>
            {props.children}
        </Context.Provider>
    )
}

export default Store
