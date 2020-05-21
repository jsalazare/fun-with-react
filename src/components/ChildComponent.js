import React from 'react'

export default function ChildComponent(props) {
    const {changeMes} = props;
    return (
        <div>
            <button onClick = {() => {changeMes('child')}}>Send message to parent component</button>
        </div>
    )
}
