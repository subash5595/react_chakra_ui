import React from "react";

const Demo = (props) => {
  console.log("Demo");
  return (
    <>
      {true ? <p>SHOW DEMO</p> : ""}
      <button onClick={props.fun}>CLICK</button>
    </>
  );
};

export default React.memo(Demo);
