import React, { useState } from "react";

function Object(){

    const[car,setCar] = useState({year:2024,
                                  make:"ford",
                                  model:"mustang"   });   
                                  
                                

//  function handleyearchange(event){
//     setCar(c => ({...car, year: event.target.value}));
//  }  
function handleyearchange(event){
    setCar(car => ({year:event.target.value}))
}
 function handlemakechange(event){
    setCar(c => ({...car,make:event.target.value}));
 }  
 function handlemodelchange(event){
    setCar(c => ({...car, model: event.target.value}));
 }                             





 
    return(<div>
        <p>your favorite car is : {car.year} {car.make} {car.model}</p>

        <input type = "number" value ={car.year} onChange={handleyearchange}></input>
        <input type = "text" value ={car.make} onChange={handlemakechange}></input>
        <input type = "text" value ={car.model}onChange={handlemodelchange}></input>


    </div>) 
                                }


export default Object