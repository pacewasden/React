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

  switchNameHandler =()=>{
    console.log("Button was clicked");
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I am a react app</h1>
        <p>This is still working</p>
        <button onClick={this.switchNameHandler}> Switch Person </button>
        <Person name={this.state.person[0].name} age= {this.state.person[0].age}/ >
        <Person name={this.state.person[1].name} age= {this.state.person[1].age}> My hobbies include golf </Person>
        <Person name={this.state.person[2].name} age= {this.state.person[2].age}/>
      </div>
    );
  }
}

export default App;
