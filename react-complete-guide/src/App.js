import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

  state = {
    person: [
      {name:"Pace", age:"29"},
      {name:"Shana", age:"39"},
      {name:"Jack", age:"9"}
    ]
  }
  //setState function switches state information
  switchNameHandler =()=>{
    console.log("Button was clicked");
  }
  nameChangeHandler =(event)=>{
    this.setState({
      person: [
        {name:"Pace", age:"29"},
        //Dynamically changing information 
        {name:event.target.value, age:"39"},
        {name:"Jack", age:"9"}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    };

    style.backgroundColor= 'red';


    return (
      <div className="App">
        <h1>Meet the Barbers Page</h1>
        <p>This is still working</p>
        <button style= {style} onClick={this.switchNameHandler}> Switch Person </button>
        <Person 
          name={this.state.person[0].name}
          age= {this.state.person[0].age}
         / >
        <Person 
          click= {this.switchNameHandler} 
          name={this.state.person[1].name} 
          age= {this.state.person[1].age}
          changed={this.nameChangeHandler}> My hobbies include golf 
        </Person>
        <Person 
          name={this.state.person[2].name} 
          age= {this.state.person[2].age}
        />
      </div>
    );
  }
}

export default App;
