function List(){

    const fruit=[
    {name: "apple" ,calor:95},     
    {name: "orrange" ,calor:45},
    {name: "banana" ,calor:105},
    {name: "coconut" ,calor:195},
    {name: "pineapple" ,calor:37} 

                ];
    // const listitems = fruit.map(fruit => <li>{fruit}</li>)

    const listitems= fruit.map(fruit => <li key={fruit.name}>{fruit.name}: &nbsp; <b>{fruit.calor}</b></li>
    )

    return(<ul>{listitems}</ul>);
} 
export default List