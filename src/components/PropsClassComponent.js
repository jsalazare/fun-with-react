import React, {Component} from 'react'

class PropsClassComponent extends Component {
    render(){
        return (
            <div>
                <h1>Hello World from class component: {this.props.name}</h1>
                {this.props.children}
            </div>
        )
    }

}


export default PropsClassComponent
