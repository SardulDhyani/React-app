import React, { Component } from 'react';
// import Radium, {StyleRoot} from 'radium';
// import styled from 'styled-components';
import classes from './App.css';

import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'sdee', name: 'Max', age: 28 },
      { id: 'sdeswe', name: 'Manu', age: 29 },
      { id: 'sdwdvcdee', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons : persons});

  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons : persons });
  }

  togglePersonHandler = () => {
    this.setState({ showPersons : (!this.state.showPersons)});
  }

  render() {
    // const style = {
    //   backgroundColor : 'green',
    //   color : 'white',
    //   font : 'inherit',
    //   border : '1px solid blue',
    //   padding : '8px',
    //   cursor : 'pointer',
    //   ':hover' : {
    //     backgroundColor : 'lightgreen',
    //     color : 'black'
    //   }
    // }



    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          { this.state.persons.map( (person, index) => {
              return <Person 
                click={() => this.deletePersonHandler(index)} 
                name={person.name} 
                age={person.age} 
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            }) 
          }
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor : 'tomato',
      //   color : 'black'
      // }
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push('red');
    } if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (

        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button onClick={this.togglePersonHandler}> 
            Toggle Persons 
          </button>    
          
          { persons }
        </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
