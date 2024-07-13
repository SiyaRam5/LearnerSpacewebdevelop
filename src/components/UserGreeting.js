import PropTypes from 'prop-types';

function UserGreeting(props){

    // if (props.isloggedin){
    //     return <h2> Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>pls log in to continue</h2>
    // }











    // return (props.isloggedin ? <h2 className='welcomemsg'>welcome{props.username}</h2> : <h2 className='loginpromp'>please login</h2>
    // )

    const welcomemsg=<h2 className='welcomemsg'>welcome{props.username}</h2> 
    const loginpromp=<h2 className='loginpromp'>please login</h2>


    return(props.isloggedin ? welcomemsg : loginpromp)
}


UserGreeting.propTypes =  {
isloggedin:PropTypes.bool,
username:PropTypes.string,
}

UserGreeting.defaultProps={
    isloggedin:false,
    username:"Guest"
}




export default UserGreeting