import React from 'react'

const PropsFunctionalComponent = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello World from funcional component: {props.name}</h1>
            {props.children}
        </div>
    )
}



export default PropsFunctionalComponent;