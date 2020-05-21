import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: ''
        }
        
    }


     changeMessage = (newMessage) => {
        this.setState(prevState => {
            prevState.message = newMessage;
        })
        alert(`Hi, message: ${newMessage}` );
    }


    render() {
        return (
            <div>
                <h1>{`message value: ${this.state.message}`}</h1>
                <ChildComponent changeMes={this.changeMessage}></ChildComponent>
            </div>
        )
    }
}
