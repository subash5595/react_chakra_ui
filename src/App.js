import React from "react";
import Demo from "./Demo";
import Demo1 from "./Demo1";
import Demo3 from "./Demo3";
import Demo4 from "./Demo4";

const App = () => {
  const [show, setShow] = React.useState(false);

  const fun = React.useCallback(() => {
    console.log("fun", show);
    setShow((prev) => !prev);
  }, []);

  const arr = React.useMemo(() => Array(10).fill(0), []);

  return (
    <div>
      <h1>App</h1>
      <Demo fun={fun} />
      <Demo1 show={show} />
      <Demo3 />
      <Demo4 arrayData={arr} />
    </div>
  );
};

export default App;
