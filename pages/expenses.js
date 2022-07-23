import Layout from '../components/Layout'
import styles from '../styles/Expenses.module.css'
import lemon from '../public/Revised_Lemon.png'
import Image from 'next/image'

export default function Expenses() {
    return (
        <Layout>
           <div className={styles.mainContainer}>
            <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>Date</th>
                                <th className={styles.th}>Property</th>
                                <th className={styles.th}>Category</th>
                                <th className={styles.th}>Description</th>
                                <th className={styles.th}>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.tr}>
                                <td className={styles.thtd}>11/15/12</td>
                                <td className={styles.thtd}>1405 Ridge Dr.</td>
                                <td className={styles.thtd}>Landscaping</td>
                                <td className={styles.thtd}>Paid Louis</td>
                                <td className={styles.thtd}>$115.00</td>
                            </tr>
                            <tr className={styles.tr}>
                                <td className={styles.thtd}>11/15/12</td>
                                <td className={styles.thtd}>1405 Ridge Dr.</td>
                                <td className={styles.thtd}>Landscaping</td>
                                <td className={styles.thtd}>Paid Louis</td>
                                <td className={styles.thtd}>$115.00</td>
                            </tr>
                            <tr className={styles.tr}>
                                <td className={styles.thtd}>11/15/12</td>
                                <td className={styles.thtd}>1405 Ridge Dr.</td>
                                <td className={styles.thtd}>Landscaping</td>
                                <td className={styles.thtd}>Paid Louis</td>
                                <td className={styles.thtd}>$115.00</td>
                            </tr>
                            <tr className={styles.tr}>
                                <td className={styles.thtd}>11/15/12</td>
                                <td className={styles.thtd}>1405 Ridge Dr.</td>
                                <td className={styles.thtd}>Landscaping</td>
                                <td className={styles.thtd}>Paid Louis</td>
                                <td className={styles.thtd}>$115.00</td>
                            </tr>
                            <tr className={styles.tr}>
                                <td className={styles.thtd}>11/15/12</td>
                                <td className={styles.thtd}>1405 Ridge Dr.</td>
                                <td className={styles.thtd}>Landscaping</td>
                                <td className={styles.thtd}>Paid Louis</td>
                                <td className={styles.thtd}>$115.00</td>
                            </tr>
                            <tr className={styles.tr}>
                                <td className={styles.thtd}>11/15/12</td>
                                <td className={styles.thtd}>1405 Ridge Dr.</td>
                                <td className={styles.thtd}>Landscaping</td>
                                <td className={styles.thtd}>Paid Louis</td>
                                <td className={styles.thtd}>$115.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
           </div>
        </Layout>
    )
}