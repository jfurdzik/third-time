import Toggle from "../Toggle/Toggle";
import Stopwatch from "../Stopwatch/Stopwatch";
import logo from '../../assets/logo.png';
import styles from './HomePage.module.css';

export default function HomePage() {
    return(
        <>
            <img className={styles.logo} src={logo} height={100} width={100}/>
            <Toggle></Toggle>
            <Stopwatch></Stopwatch>
        </>
    );
}