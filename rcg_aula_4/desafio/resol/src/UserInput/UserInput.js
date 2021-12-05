import React from "react";

const UserInput = (props) => {
  return (
    <div className="userInput">
      <input
        type="text"
        onChange={props.changed}
        value={props.currText}
      ></input>
      <p> {props.children} </p>
    </div>
  );
};

export default UserInput;
