import React from "react";

const UserOutput = (props) => {
  return (
    <div className="userOutput">
      <p>username: {props.username} </p>
      <p>texto: {props.texto} </p>
    </div>
  );
};

export default UserOutput;
