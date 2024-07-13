import React,{useState} from "react";
import Mycomp from "./Mycomp";
function Onchange(){
    const [name,setName]=useState("guest");
    function handlename(event){
        setName(event.target.value);

    }
    return(
        <div>
            <input value={name} Onchange={handlename}></input>
            <p> Name:{name}</p>
        </div>
    )
}
export default Onchange