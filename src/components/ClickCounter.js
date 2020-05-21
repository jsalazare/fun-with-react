import React, {Component} from 'react';
import CreateHOC from './CreateHOC';

class ClickCounter extends Component {

    render() {
        const {counterPlus, counterValue, name} = this.props
        return (
            <div>
                <button onClick={counterPlus}>Click Counter {counterValue} name = {name}</button>
            </div>
        );
    }
}

export default CreateHOC(ClickCounter)