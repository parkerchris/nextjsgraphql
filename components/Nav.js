import styles from '../styles/Nav.module.css'


export default function Nav() {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.linkGroup}>
                    <div>&&</div>
                    <h3>Home</h3>
                </div>
                <div className={styles.linkGroup}>
                    <div>&&</div>
                    <h3>Properties</h3>
                </div>
                <div className={styles.linkGroup}>
                    <div>&&</div>
                    <h3>Maintenance</h3>
                </div>
                <div className={styles.linkGroup}>
                    <div>&&</div>
                    <h3>Expenses</h3>
                </div>
            </div>
        </div>
    )
}