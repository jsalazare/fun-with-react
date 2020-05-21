import React, { Component } from 'react'

export default class Events extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             message: 'change message'
        };
        console.log(this);
    }

    changeMessage = () => {
        // this.setState((prevState) => {
        //     prevState.message = 'message changued'
        // })
        this.doSome();
    };

    doSome() {
        console.log(this.state.message);
    }
    
    render() {
        return (
            <div>
                <button onClick={this.changeMessage}>changue text</button>
            </div>
        )
    }
}
