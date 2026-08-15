import React from 'react';
import styles from './Timer.module.css';
import resetImg from '../../assets/reset.png';
import { useTimer } from 'react-timer-hook';
import { useState } from "react";

export default function Timer({ expiryTimestamp }) {
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
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called'), autoStart: false, interval: 20 });

  const [startedAlready, setStartedAlready] = useState(false);
  const startAndFlag = () => {
    start();
    setStartedAlready(true);
  };

  return (
    <div className={styles.component}>
      <div className={styles.timebox}>
        <span>{hours > 0 && <span>{hours}:</span>}<span>{minutes < 10 && 0}{minutes}</span>:<span>{seconds < 10 && 0}{seconds}</span></span>
      </div>
      {isRunning ? <button onClick={pause} className={styles.startPause}>pause</button>
      : (startedAlready ? <button onClick={resume} className={styles.startPause}>resume</button> : <button onClick={startAndFlag} className={styles.startPause}>start</button>)}
      
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button>
    </div>
  );
}