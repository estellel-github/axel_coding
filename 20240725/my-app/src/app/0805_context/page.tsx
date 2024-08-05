"use client";
import { useContext, useEffect, useState, createContext } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is a counter: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increase +</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrease -</button>
    </>
  );
}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Counter />
      <br /><br />
      <Timer />
    </div>
  );
}