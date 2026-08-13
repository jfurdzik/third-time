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
      <div className={styles.timebox}>
        <span>{hours > 0 && <span>{hours}:</span>}<span>{minutes < 10 && 0}{minutes}</span>:<span>{seconds < 10 && 0}{seconds}</span></span>
      </div>
      {isRunning ? <button onClick={pause} className={styles.startPause}>Pause</button> : <button onClick={start} className={styles.startPause}>Start</button>}
      <button onClick={reset}>Reset</button>
    </div>
  );
}