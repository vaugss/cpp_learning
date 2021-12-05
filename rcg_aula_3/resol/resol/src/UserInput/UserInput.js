import React from "react";

const UserInput = (props) => {
  return (
    <div className="userInput">
      <input
        type="text"
        onChange={props.changed}
        value={props.defaultUsername}
      />
    </div>
  );
};

export default UserInput;
