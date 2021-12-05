import React from "react";

const ValidationComponent = (props) => {
  const msg_len = props.msg_len;

  let validationMessage = "Text long enough";

  if (msg_len <= 5) {
    validationMessage = "Text too short!";
  }

  return (
    <div className="ValidationComponent">
      <p>{validationMessage}</p>
    </div>
  );
};

export default ValidationComponent;
