import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter --> array of dependencies
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New messages (${value})`;
    }
  }, [value]); //When the array is empty it only runs on the intial render
  useEffect(() => {
    console.log("hello world!!");
  }, []);
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
