import React, {Component} from 'react';


const CreateHOC = OriginalComponent => {
    class NewComponent extends Component {
        constructor(props, context) {
            super(props, context);
            this.state = {
                counter: 0
            }
        }


        counterPlus = () => {
            this.setState(prevState => ({
                    counter: prevState.counter + this.props.incrementValues
                }
            ));
        };

        render() {
            return <OriginalComponent counterPlus={this.counterPlus} counterValue={this.state.counter} {...this.props}></OriginalComponent>;
        }
    }
    return NewComponent;
};


export default CreateHOC;