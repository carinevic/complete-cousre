import React, {useState}from 'react';

import './App.css';
import Person from './Person/Person';

const App = props =>{

  const [personState, setPersonState] = useState({
    persons: [
      {name: 'carine', age: '30'},
      {name: 'vic', age: '9'},
      {name: 'terry', age: '36'}
    ]
  });
  const switchNameHandler = ()=> {
    setPersonState({
      persons:[
       {name: 'carine', age: '30'},
       {name: 'victory', age: '9'},
       {name: 'terry', age: '37'}
     ]
   
      });
   };
  return (
    <div className="App">
      <h1>Am learning react</h1>
      <Person name={personState.persons[1].name}
       age={personState.persons[1].age}/> 
      <button onClick = {switchNameHandler}> Switch Name</button>
      <Person name={personState.persons[0].name}
       age={personState.persons[0].age}> My sister love me </Person>
      <Person name={personState.persons[2].name} 
      age={personState.persons[2].age}/> 
     </div>
  );

  




}
