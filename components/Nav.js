import styles from '../styles/Nav.module.css'
import Link from 'next/link'


export default function Nav() {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Link href="/">
                    <a>
                        <div className={styles.linkGroup}>
                            <div>&&</div>
                            <h3>Home</h3>
                        </div>
                    </a>
                </Link>
                <Link href="/properties">
                    <a>
                        <div className={styles.linkGroup}>
                            <div>&&</div>
                            <h3>Properties</h3>
                        </div>
                    </a>
                </Link>
                <Link href="/maintenance">
                    <a>
                        <div className={styles.linkGroup}>
                            <div>&&</div>
                            <h3>Maintenance</h3>
                        </div>
                    </a>
                </Link>
                <Link href="/expenses">
                    <a>
                        <div className={styles.linkGroup}>
                            <div>&&</div>
                            <h3>Expenses</h3>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}