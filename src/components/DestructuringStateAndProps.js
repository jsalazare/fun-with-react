import React from 'react'


const DestructuringStateAndProps = (props) => {
    const {name, age} = props //here is the destructure
    return (
        <h1>name : {name}, age : {age}</h1>
    )
}


export default  DestructuringStateAndProps;