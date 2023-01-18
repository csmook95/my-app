import React from "react"

function Counter() {
  const [counter, setCounter] = React.useState(0);
  function countUp() {
    setCounter(current => { return ++current })
  }
  console.log(`rendered`, counter)
  return (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button onClick={countUp}>Click me</button>
    </div>
  );
}

export default Counter;
