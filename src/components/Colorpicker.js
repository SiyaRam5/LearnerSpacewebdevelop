import { useState } from "react";
// import React, {useState} from "react";

function Colorpicler(){
    const[color,setColor]=useState("#FFFFFF");

function colorchange (event){
    setColor(event.target.value);
}



return(
    <div>
        <h1>COLOR PICKER</h1>
        <p> selected color:{color}</p>
        <h3>select a color:</h3>
        <input type="color" value={color} onChange={colorchange}/*initial color */></input>
    </div>
)
}

export default Colorpicler