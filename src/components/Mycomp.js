import React, {useState} from 'react';

function Mycomp(){


const [name, setName]= useState("guest");
const [age, setAge] = useState(0);
const [count,setCount]= useState(0);

const updateName = () => {

    setName("mario");
    // name = "mario";
    // console.log(name);
}
const incrementage =() =>{
    setAge(age+1);
}

const incrementCount =() =>{
    setCount(count+1);
}


return (
    <div>
        <p>Name:{name}</p>
        <button onClick={updateName}>set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementage}>Increment Age</button>

        <p>count:{count}</p>
        <button onClick={incrementCount}>count</button>
    </div>
);



}
export default Mycomp;