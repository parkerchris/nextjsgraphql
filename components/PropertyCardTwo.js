import styles from '../styles/PropertyCardTwo.module.css'

export default function PropertyCardTwo() {
    return (
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <div><p className={styles.address}>1405 Ridge Dr.</p></div>
                <div><p className={styles.city}>Redding, CA.</p></div>
            </div>
            <div className={styles.containerRight}>
                <div className={styles.rent}><p>$2,000/M</p></div>
                <div className={styles.statusContainer}>
                    <div className={styles.statusIcon}></div>
                    <div><p className={styles.status}>Occupied</p></div>
                </div>
            </div>
        </div>
    )
}