"use client";
import React, { useState } from "react";

const Count = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-6 text-[40px]">
        <p>+</p>
        <p data-tested="count">{count}</p>
        <p>-</p>
      </div>
      <div className="flex gap-6 ">
        <button
          onClick={() => increment()}
          className=" bg-orange-400 px-3 py-6"
        >
          increment
        </button>
        <button
          onClick={() => decrement()}
          className=" bg-orange-500 px-3 py-6"
        >
          decrement
        </button>
        <button onClick={() => reset()} className=" bg-orange-600 px-6 py-3">
          reset
        </button>
      </div>
    </div>
  );
};

export default Count;
