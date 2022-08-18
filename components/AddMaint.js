import styles from '../styles/AddMaint.module.css'
import { GiPaintRoller } from "react-icons/gi";

export default function AddMaint() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <GiPaintRoller className={styles.icon}/>
                <p className={styles.p}>Add Maintenance Request</p>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.add}>
                    <p className={styles.p}>+</p>
                </div>
            </div>
        </div>
    )
}