import { useState } from "react";
import styles from './Toggle.module.css';

export default function Toggle({ timeMode, handleToggle }) {
    const toggleClassWork = timeMode === "stopwatch" ? styles.workActive : styles.workNotActive;
    const toggleClassBreak = timeMode === "timer" ? styles.breakActive : styles.breakNotActive;
    const bkgColor = timeMode === "timer" ? styles.purpleBk : '';

    return (
        <div className={`${styles.comp} ${bkgColor}`}>
            <button onClick={handleToggle}>
                <div className={`${toggleClassWork}`}>work</div>
                <div className={`${toggleClassBreak}`}>break</div>
            </button>
        </div>
    )
}