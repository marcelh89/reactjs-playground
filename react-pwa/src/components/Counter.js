import { useState } from "react";

function Counter(props) {
  let [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1);
  }

  function dec() {
    setCount(count - 1);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Counter App 123</h3>
      <div>
        <button onClick={inc}>+</button>
        <span> {count} </span>
        <button onClick={dec}>-</button>
      </div>
    </div>
  );
}

export default Counter;
