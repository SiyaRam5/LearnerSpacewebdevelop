import React, { Component } from 'react';

// class Welcome extends Component {
//     render() {
//         return <h1>Class Component</h1>;
//     }
// }

// const Welcome=(props) =>{
//     console.log(props)
//     return <h1>welcome {props.name}</h1>
// }

class Welcome extends Component{
    render() {
        return (
    <h1>
        welcome {this.props.name} 
    </h1>

        )
    }

}

export default Welcome;