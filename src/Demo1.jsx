import React from "react";

const Demo1 = ({ show }) => {
  console.log("DEMO1");
  return show ? <div>Demo1</div> : null;
};

export default React.memo(Demo1);
