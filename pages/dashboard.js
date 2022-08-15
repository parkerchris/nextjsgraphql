import Layout from '../components/Layout'
import styles from '../styles/Dashboard.module.css'

export default function Dashboard() {
    return (
        <Layout>
            <div className={styles.mainContentContainer}>
                <div className={styles.analyticsContainer}>
                    <div className={styles.singleAnalyticsContainer}>
                        <h3 className={styles.h3}>Owned Assets</h3>
                        <p className={styles.p}>$2,541,000</p>
                    </div>
                    <div className={styles.singleAnalyticsContainer}>
                        <h3 className={styles.h3}>Equity</h3>
                        <p className={styles.p}>$1,218,000</p>
                    </div>
                    <div className={styles.singleAnalyticsContainer}>
                        <h3 className={styles.h3}>Debt</h3>
                        <p className={styles.p}>$519,900</p>
                    </div>
                    <div className={styles.singleAnalyticsContainer}>
                        <h3 className={styles.h3}>Expenses</h3>
                        <p className={styles.p}>$3,000</p>
                    </div>
                    <div className={styles.singleAnalyticsContainer}>
                        <h3 className={styles.h3}>Cash Flow</h3>
                        <p className={styles.p}>$1,200</p>
                    </div>
                    <div className={styles.singleAnalyticsContainer}>
                        <h3 className={styles.h3}></h3>
                        <p className={styles.p}></p>
                    </div>

                </div>
            </div>
        </Layout>
    )
}