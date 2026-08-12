import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import styles from './Stopwatch.module.css';

export default function Stopwatch() {
  const {
    totalSeconds,
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false, interval: 20 });


  return (
    <div className={styles.component}>
      <h1>react-timer-hook</h1>
      <br></br>
      <p>Stopwatch Demo</p>
      <br></br>
      <div className={styles.timebox}>
        {hours > 0 && <span>{hours}:</span>}<span>{minutes < 10 && 0}{minutes}</span>:<span>{seconds < 10 && 0}{seconds}</span>
      </div>
      <br></br>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <br></br>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}