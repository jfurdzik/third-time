import Toggle from "../Toggle/Toggle";
import Stopwatch from "../Stopwatch/Stopwatch";
import logo from '../../assets/logo.png';
import styles from './HomePage.module.css';
import { useState } from "react";
import Timer from "../Timer/Timer";

export default function HomePage() {
    const [mode, setMode] = useState("");
    const handleCallback = (childData) => {
        setMode(childData);
    }

    //change later, for now hardcoded to 10 mins timer
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

    return(
        <>
            <img className={styles.logo} src={logo} height={100} width={100}/>
            <Toggle updateMode={handleCallback}></Toggle>
            {mode === "stopwatch" ? <Stopwatch></Stopwatch> : <Timer expiryTimestamp={time}></Timer>}
        </>
    );
}