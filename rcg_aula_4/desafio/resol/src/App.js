import React, { useState } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import CharComponent from "./CharComponent/CharComponent";
import ValidationComponent from "./ValidationComponent/ValidationComponent";

const App = (props) => {
  const [textState, settextState] = useState({
    msg: "",
  });

  console.log(textState);

  const textChangedHandler = (event) => {
    //console.log("button clicked");
    //DONT DO THIS: this.state.persons[0].name = 'Teste';
    settextState({
      msg: event.target.value,
    });

    //console.log(textState.msg);
    //const arr = [...textState.msg];
    //console.log(textState.msg_arr);

    //debug
    //let unique = [...new Set(textState.msg_arr)];
    //console.log(unique);
  };

  const deleteCharFromText = (delChar) => {
    let originalText = [...textState.msg];

    let filteredArr = originalText.filter(function (value, index, arr) {
      return value !== delChar;
    });

    console.log("msg orignal: ", originalText);
    console.log("msg filtrada: ", filteredArr);

    settextState({
      msg: filteredArr.join(""),
    });
  };

  let uniqueChars = null;

  if (textState.msg.length > 0) {
    let uniques = [...new Set(textState.msg)];
    uniqueChars = (
      <div>
        {uniques.map((_char, index) => {
          return (
            <CharComponent
              click={() => deleteCharFromText(_char)}
              uniqueChar={_char}
              key={index}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <p>Solucao do exercicio - Aula 4</p>
      <UserInput changed={textChangedHandler} currText={textState.msg}>
        Input Length: {textState.msg.length}
      </UserInput>
      <ValidationComponent msg_len={textState.msg.length} />
      {uniqueChars}
    </div>
  );
};

export default App;
