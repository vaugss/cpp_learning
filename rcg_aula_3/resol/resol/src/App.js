import React, { useState } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

const App = (props) => {
  const [usernameState, setUsernameState] = useState({
    username: "default",
    texto: "qualquer coisa",
  });

  console.log(usernameState);

  // const switchNameHandler = (newUsername) => {
  //   //console.log("button clicked");
  //   //DONT DO THIS: this.state.persons[0].name = 'Teste';
  //   setUsernameState({
  //     username: newUsername,
  //   });
  // };

  const usernameChangedHandler = (event) => {
    //console.log("button clicked");
    //DONT DO THIS: this.state.persons[0].name = 'Teste';
    setUsernameState({
      username: event.target.value,
    });
  };

  return (
    <div className="App">
      <p>Solucao do exercicio - Aula 3</p>
      <UserInput
        changed={usernameChangedHandler}
        defaultUsername={usernameState.username}
      />
      <UserOutput username={usernameState.username} texto="qualquer texto" />
    </div>
  );
};

export default App;
