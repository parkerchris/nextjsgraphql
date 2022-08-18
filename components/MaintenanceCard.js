import styles from '../styles/MaintenanceCard.module.css'

export default function MaintenanceCard() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.topContainer}>
                <div className={styles.statusContainer}>
                    <div className={styles.statusIcon}></div>
                    <p className={styles.status}>OPEN</p>
                </div>
                <h3 className={styles.address}>1405 Ridge Dr.</h3>
                <p>Created 8/17/2022</p>
            </div>
            <div className={styles.bottomContainer}>
                <p className={styles.header}>Description</p>
                <p>The light in the downstairs bathroom blinks repeatedly. Bulb cannot be replaced. The whole unit will need to be replaced.</p>
            </div>
        </div>
    )
}