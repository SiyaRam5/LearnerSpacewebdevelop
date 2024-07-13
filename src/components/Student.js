import Proptypes from 'prop-types'
function Student(props){
return(

    <div className="student">
<p> Name: {props.name}</p>
<p>Age:{props.age}</p>
<p>student: {props.isStudent ? "Yes" : "No"}</p>
<p>male:{props.male}</p>
    </div>
);


}


Student.propTypes={
   name: Proptypes.string,
   age: Proptypes.number,
   isStudent: Proptypes.bool,
}

Student.defaultProps={
    name:"guest",
    age:0,
    isStudent:false,
    male:"idk",
}


export default Student