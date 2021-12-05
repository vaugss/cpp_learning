import "./App.css";
import Person from "./Person/Person";
import React, { useState } from "react";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "2r23crq2", name: "Max", age: 28 },
      { id: "8o7j8o8n", name: "Teste", age: 21 },
      { id: "sj2hriu2h2", name: "Cida", age: 29 },
    ],
    otherState: "some other value",
    showPersons: false,
  });

  console.log(personsState);

  const deletePersonHandler = (personsIndex) => {
    //const persons = personsState.persons.slice(); //1st alternative
    const persons = [...personsState.persons]; //best alternative ES6
    //const persons = personsState.persons; //just taking the reference, not a real copy
    persons.splice(personsIndex, 1);
    setPersonsState({ ...personsState, persons: persons });
  };

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...personsState.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({ ...personsState, persons: persons });
    console.log(personsState);
  };

  const togglePersonHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({ ...personsState, showPersons: !doesShow });
    console.log(personsState);
  };

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => nameChangedHandler(event, person.id)}
            />
          );
        })}
      </div>
    );
  }

  const classes = [];
  if (personsState.persons.length <= 2) {
    classes.push("red"); //classes = ['red']
  }
  if (personsState.persons.length <= 1) {
    classes.push("bold"); //classes = ['red', 'bold']
  }

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p className={classes}>This is really working!</p>
      <button className="button" onClick={togglePersonHandler}>
        Toggle Persons
      </button>
      {persons}
    </div>
  );
};

export default App;
