import React from "react";

const UserOutput = (props) => {
  return (
    <div className="userOutput">
      <p>
        {props.msg_title} : {props.msg_value}
      </p>
    </div>
  );
};

export default UserOutput;
