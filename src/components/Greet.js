import React from 'react'

// function Greet()
// {
//     return <h1>Hello Vishwas</h1>
// }

const Greet=(props) => {
      console.log(props)
     
    //   return <h1>Hello vishvas </h1>
    return ( <div><h1> Hello {props.name}  a.k.a {props.heroname}</h1>

    {props.children} 
     
     </div>)
}

export default Greet