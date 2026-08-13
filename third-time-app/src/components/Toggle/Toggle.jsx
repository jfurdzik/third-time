import { useState } from "react";
import styles from './Toggle.module.css';

export default function Toggle() {
    const [mode, setMode] = useState("stopwatch");
    const toggleClassWork = mode === "stopwatch" ? styles.workActive : styles.workNotActive;
    const toggleClassBreak = mode === "timer" ? styles.breakActive : styles.breakNotActive;
    const bkgColor = mode === "timer" ? styles.purpleBk : '';

    const handleToggle = () => {
        //flip mode
        console.log("toggle button clicked");
        if (mode === "stopwatch") {
            setMode("timer");
        }
        else if (mode === "timer") {
            setMode("stopwatch");
        }
        console.log("mode is", mode);
    };

    return (
        <div className={`${styles.comp} ${bkgColor}`}>
            <button onClick={handleToggle}>
                <div className={`${toggleClassWork}`}>work</div>
                <div className={`${toggleClassBreak}`}>break</div>
            </button>
        </div>
    )
}