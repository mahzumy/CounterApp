'use client';

import { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="flex w-[450px] justify-center items-center m-auto h-screen text-center">
      <div className="border-4 p-2 border-black rounded-md">
        <div className="p-2">
          <div className="text-3xl">Counter App</div>
          <div className="text-xl py-2">{counter}</div>
        </div>
        <div className="grid gap-2">
          <button
            type="button"
            className="py-2 px-4 bg-black text-white rounded-lg"
            onClick={increment}
          >
            Increment
          </button>
          <button
            type="button"
            className="py-2 px-4 bg-black text-white rounded-lg"
            onClick={decrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};
