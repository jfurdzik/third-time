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
      <p>toggle here</p>
      <div className={styles.timebox}>
        {hours > 0 && <span>{hours}:</span>}<span>{minutes < 10 && 0}{minutes}</span>:<span>{seconds < 10 && 0}{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      {isRunning ? <button onClick={pause}>Pause</button> : <button onClick={start}>Start</button>}
      <button onClick={reset}>Reset</button>
    </div>
  );
}