import Toggle from "../Toggle/Toggle";
import Stopwatch from "../Stopwatch/Stopwatch";
import logo from '../../assets/logo.png';
import styles from './HomePage.module.css';
import { useState } from "react";
import Timer from "../Timer/Timer";

export default function HomePage() {
    const [mode, setMode] = useState("stopwatch");
    const handleCallback = (childData) => {
        setMode(childData);
    }

    //timer callback gets data from stopwatch child component
    const [thirdSeconds, setThirdSeconds] = useState(0);
    const handleCallbackTime = (childTime) => {
        const third = childTime / 3; //this is a number (total seconds) not a date
        setThirdSeconds(third);
    }

    //need this bc should capture current timestamp when switch not pause stamp (loses time when switching)
    const generateCurrentExpiryTime = () => {
        const finalTime = new Date();
        finalTime.setSeconds(finalTime.getSeconds() + thirdSeconds); // add third time (number of secs) to current time Date obj
        return finalTime;
    }

    return(
        <>
            <img className={styles.logo} src={logo} height={100} width={100}/>
            <Toggle updateMode={handleCallback}></Toggle>
            {mode === "stopwatch" ? <Stopwatch sendTotalTime={handleCallbackTime}></Stopwatch> : <Timer expiryTimestamp={generateCurrentExpiryTime} thirdAmt={thirdSeconds}></Timer>}
        </>
    );
}