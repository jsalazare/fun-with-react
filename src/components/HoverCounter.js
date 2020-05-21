import React, {Component} from 'react';
import CreateHOC from './CreateHOC';

class HoverCounter extends Component {

    render() {
        const {counterPlus, counterValue, name} = this.props;
        return (
            <div>
                <h1 onMouseOver={counterPlus}>Hover Counter {counterValue} name= {name}</h1>
            </div>
        );
    }
}

export default CreateHOC(HoverCounter)