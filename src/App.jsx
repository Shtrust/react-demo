import "./App.css";
import Button from "./Button.jsx";
import Header from "./Header.jsx";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function formatTime() {
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${seconds}:${milliseconds}`;
  }

  return (
    <div>
      <Header></Header>
      <div className="stopwatch">
        <div className="timer">{formatTime()}</div>
        <div className="buttons">
          <Button
            title="START"
            onClick={start}
            bColor="#77E1A828"
            borColor="#77E1A8FF"
          ></Button>
          <Button
            title="STOP"
            onClick={stop}
            bColor="#E1777D28"
            borColor="#E1777DFF"
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
