import React from 'react'

const tableStyle = {
    border: '1px solid black'
  };

export default function ListCard(props) {
   
    return (
        <table style={tableStyle}>
            <tr>
                <th>List ID: {props.list.id}</th>
            </tr>
            {props.list.players.map((p, index) => <tr key={p.id}><td>{index+1}.</td><td>{p.name}</td></tr>)}
        </table>
    )
}
