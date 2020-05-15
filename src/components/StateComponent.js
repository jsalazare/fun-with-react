import React, {Component} from 'react'

class StateComponent extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Hello click to change the message'
        }
    }

    changeMessage() {
        this.setState(
            {
                message: 'Hello message changed'
            }
        )
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <p>
                    <button onClick={() => this.changeMessage()}>change value</button>
                </p>
            </div>
        )
    }
}


export default StateComponent