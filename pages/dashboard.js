import Layout from '../components/Layout'
import styles from '../styles/Dashboard.module.css'
import LayoutTwo from '../components/LayoutTwo'

export default function Dashboard() {
    return (
        <LayoutTwo>
            <div className={styles.mainContentContainer}>
                <div className={styles.innerContainer}>
                    <h1 className={styles.intro}>Hello, Chris</h1>
                    <div className={styles.analyticsContainer}>
                        <div className={styles.graph}></div>
                        <div className={styles.portfolio}>
                            <div><p className={styles.value}>$2,005,900</p></div>
                            <div><p className={styles.title}>Portfolio</p></div>
                        </div>
                        <div className={styles.equity}>
                            <div><p className={styles.value}>$1,320,450</p></div>
                            <div><p className={styles.title}>Equity</p></div>
                        </div>
                        <div className={styles.debt}>
                            <div><p className={styles.value}>$1,320,450</p></div>
                            <div><p className={styles.title}>Debt</p></div>
                        </div>
                        <div className={styles.rent}>
                            <div><p className={styles.value}>$1200</p></div>
                            <div><p className={styles.title}>Rents</p></div>
                        </div>
                        <div className={styles.expenses}>
                            <div><p className={styles.value}>$800</p></div>
                            <div><p className={styles.title}>Expenses</p></div>
                        </div>
                        <div className={styles.cashflow}>
                            <div><p className={styles.value}>$400</p></div>
                            <div><p className={styles.title}>Cash Flow</p></div>
                        </div>
                    </div>
                    <h1 className={styles.intro}>Today</h1>
                    <h1 className={styles.intro}>Issues</h1>

                </div>
               
            </div>
        </LayoutTwo>
    )
}