import React, { Component } from 'react'

export default class DestructuringPropsAndStateClassComponent extends Component {
    render() {
        const {name, age} = this.props;
        return (
            <div>
               <h1>name : {name}, age : {age}</h1> 
            </div>
        )
    }
}