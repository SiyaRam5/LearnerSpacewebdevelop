import React, { Component } from "react";

// class Msg extends Component{
//     render(){
//         return(
//         <h1>
//             WELCOMe visitor
//         </h1> 
//         )
//     }
// }
// export default Msg 


class Msg extends Component{
    constructor(){
        super() 
            this.state={
                message: 'welcome state visior'

            }
    }


        changemessage(){
            this.setState({
                message: 'thanks foir subscribing'
            })
        }

        render() {
            return(
            <div>
                 <h1>{this.state.message}</h1>
                <button onClick = {()  => this.changemessage()}>Subscribe</button>
            </div>
            )
        }
    }

export default Msg