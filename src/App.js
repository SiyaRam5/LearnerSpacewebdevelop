import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Msg from './components/Msg';
import Counter1 from './components/Counter1';
import Card from './components/Card';
import Button from './components/Button';
import Student from './components/Student';
import UserGreeting from './components/UserGreeting';
import List from './components/List';
import Buttonbrocode from './components/Buttonbrocode';
import Mycomp from './components/Mycomp';
import Onchange from './components/Onchange';
import Colorpicler from './components/Colorpicker';
import Object from './components/Object';





function App() {
  return (
    <div className="App">
      <Greet name=" bruce" heroname= "bro" children="hero"></Greet>
      <Greet name = " clark"   heroname= "clerk">
        <button>action</button>
      </Greet>
      <Greet name =" diana" heroname="dine"  ></Greet>

<Buttonbrocode>brocode button</Buttonbrocode>

<Onchange></Onchange>
<Object></Object>



<Colorpicler></Colorpicler>

<Mycomp></Mycomp>





<Student name="lary"></Student>

<UserGreeting isloggedin={false} username ="brocode"></UserGreeting>
<UserGreeting isloggedin={true} ></UserGreeting>



<List></List>

<Card></Card>
<Button></Button>
<Student name= "4hrvideo" age="30" isStudent={true}  male="true"></Student>

<Welcome name="bruce"></Welcome>
<Welcome name="clark"></Welcome>
<Welcome name="diana"></Welcome>

<Msg></Msg>
<html>hi  hh</html>
<Counter1></Counter1>

      <Welcome></Welcome>
      <Hello></Hello>    

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         RAM RAM JI!!
         
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Jai Shree Ram
        </a>
      </header> */}
    </div>
  );
}

export default App;
