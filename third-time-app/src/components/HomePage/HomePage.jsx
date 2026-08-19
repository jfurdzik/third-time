import Toggle from "../Toggle/Toggle";
import Stopwatch from "../Stopwatch/Stopwatch";
import logo from '../../assets/logo.png';
import styles from './HomePage.module.css';
import { useState } from "react";
import Timer from "../Timer/Timer";

export default function HomePage() {
    const [mode, setMode] = useState("stopwatch");
    const flipMode = () => {
        //switch mode to opposite
        if (mode === "stopwatch") {
            setMode("timer");
        }
        else if (mode === "timer") {
            setMode("stopwatch");
        }
    };

    const [totalStopwatch, setTotalStopwatch] = useState("stopwatch");
    //timer callback gets data from stopwatch child component
    const [thirdSeconds, setThirdSeconds] = useState(0);
    const handleCallbackTime = (childTime) => {
        const third = childTime / 3; //this is a number (total seconds) not a date
        setThirdSeconds(third);
        setTotalStopwatch(childTime);
    }

    //need this bc should capture current timestamp when switch not pause stamp (loses time when switching)
    const generateCurrentExpiryTime = () => {
        const finalTime = new Date();
        finalTime.setSeconds(finalTime.getSeconds() + thirdSeconds); // add third time (number of secs) to current time Date obj
        return finalTime;
    }

    //want to change this in future to be something on screen w sounds
    const expireAlert = () => {
        window.alert("Timer has finished. Time to get back to work!");
        setMode("stopwatch");
    };

    return(
        <>
            <img className={styles.logo} src={logo} height={100} width={100}/>
            <Toggle timeMode={mode} handleToggle={flipMode} ></Toggle>
            {mode === "stopwatch" ? <Stopwatch sendTotalTime={handleCallbackTime}></Stopwatch> : <Timer expiryTimestamp={generateCurrentExpiryTime} thirdAmt={thirdSeconds} totalStopwatch={totalStopwatch} expiryFunction={expireAlert}></Timer>}
        </>
    );
}