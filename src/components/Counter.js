import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            counter: 0
        }
    }

    changeCounterValue(){

        this.setState((prevState) => {
            return {counter: prevState.counter + 1}
        },
        () => {
            console.log(this.state.counter)
        })


    }

    counterFiveTimes(){
        this.changeCounterValue();
        this.changeCounterValue();
        this.changeCounterValue();
        this.changeCounterValue();
        this.changeCounterValue();
    }

    render() {
        return (
            <div>
                <h1>counter value - {this.state.counter}</h1>
                <button onClick={() => this.counterFiveTimes()}>counter++</button>
            </div>
        )
    }
}

export default Counter
