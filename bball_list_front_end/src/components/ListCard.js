import React from 'react'

export default function ListCard(props) {

    const tableStyle = {
        border: '1px solid black'
      };
 
    return (
        <table style={tableStyle}>
            <tbody>
                <tr>
                <th>List ID: {props.list.id}</th>
                </tr>
                {props.list.players.map((p, index) => <tr key={p.id}><td>{index+1}.</td><td>{p.name}</td></tr>)}
            </tbody>
        </table>
    )
}
