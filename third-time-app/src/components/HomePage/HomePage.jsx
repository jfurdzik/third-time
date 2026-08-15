import Toggle from "../Toggle/Toggle";
import Stopwatch from "../Stopwatch/Stopwatch";
import logo from '../../assets/logo.png';
import styles from './HomePage.module.css';
import { useState } from "react";

export default function HomePage() {
    const [mode, setMode] = useState("");
    const handleCallback = (childData) => {
        setMode(childData);
    }

    return(
        <>
            <img className={styles.logo} src={logo} height={100} width={100}/>
            <Toggle updateMode={handleCallback}></Toggle>
            {mode === "stopwatch" ? <Stopwatch></Stopwatch> : <p>timer here</p>}
        </>
    );
}