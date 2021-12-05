import "./App.css";
import Person from "./Person/Person";
import React, { useState } from "react";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Teste", age: 21 },
      { name: "Cida", age: 29 },
    ],
    otherState: "some other value",
  });

  console.log(personsState);

  const switchNameHandler = (newName) => {
    //console.log("button clicked");
    //DONT DO THIS: this.state.persons[0].name = 'Teste';
    setPersonsState({
      persons: [
        { name: "MadMax", age: 28 },
        { name: newName, age: 21 },
        { name: "José", age: 29 },
      ],
    });
    console.log(personsState);
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: "A", age: 28 },
        { name: event.target.value, age: 21 },
        { name: "C", age: 29 },
      ],
    });
    console.log(personsState);
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is really working!</p>
      <button style={style} onClick={switchNameHandler.bind(this, "Teste1")}>
        Switch Name
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, "Teste2")}
        changed={nameChangedHandler}
      >
        My hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
