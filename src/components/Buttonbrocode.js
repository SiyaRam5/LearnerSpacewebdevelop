function Buttonbrocode(){

// function handleclick(){
//     return (console.log("OUCH!!!"))
// }





// const handleclick = () => console.log("Ouch");

//    return (<button onClick ={handleclick}>click me😊😊 </button>)



// const handleclick2 = (name)=> console.log('{name} stop clicking me');
// return (<button onClick={()=>handleclick2("hero")}>helloji</button>)





const handleclick = (e) => e.target.textContent = "OUCH!!";
return (<button onClick = {(e)=> handleclick(e)}>dont click me</button> )



}
export default Buttonbrocode