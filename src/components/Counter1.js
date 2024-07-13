// import React, { Component } from "react";

// class Counter extends Component{
//     constructor(props){

//         super(props)

//         this.state = {
//             count:0

//         }

//     }
// }
import { Component } from "react";
class Counter1 extends Component{
    constructor(){
        super()
        this.state={
            message:'practice'
    }
}
    changemessage(){
        this.setState({
            message:'thanks'
        })
        }

        








        render(){
            return(
                <div>
                    <h1>
                        {this.state.message}
                    </h1>
                <button onClick={()=> this.changemessage()}>Subscribe</button>
                
                </div>
            )
        }

    }
export default Counter1



