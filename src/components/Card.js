import React from 'react';
import profilepic from './image/burger.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilepic}></img>
            
            <h2>bro code</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quas accusamus dolor maiores vel animi voluptatem odio possimus ipsam. Quasi!</p>


         

        </div>
    );

}
export default Card