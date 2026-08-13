import { useState } from "react";
import styles from './Toggle.module.css';

export default function Toggle() {
    const [mode, setMode] = useState("stopwatch");
    
    const handleToggle = () => {
        //flip mode
        if (mode == "stopwatch") {
            setMode("timer");
        }
        else if (mode == "timer") {
            setMode("stopwatch");
        }
    };

    return (
        <div className={styles.comp}>
            <button onClick={handleToggle}>
                <div className={styles.work}>work</div>
                <div className={styles.break}>break</div>
            </button>
        </div>
    )
}