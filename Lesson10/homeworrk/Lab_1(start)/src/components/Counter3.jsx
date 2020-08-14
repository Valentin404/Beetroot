import React, { useState } from "react";

const Counter3 = () => {
  const [countOb, setCountOb] = useState();

  const reset = () => {};

  const increment = () => {};

  const decrement = () => {};

  return (
    <>
      <h1>
        {countOb.message}: {countOb.count}
      </h1>
      <button onClick={decrement} className="btn btn-primary mr-3">
        Decrement
      </button>
      <button onClick={reset} className="btn btn-warning mr-3">
        Reset
      </button>
      <button onClick={increment} className="btn btn-success">
        Increment
      </button>
    </>
  );
};

export default Counter3;
