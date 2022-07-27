import Layout from '../components/Layout'
import styles from '../styles/Expenses.module.css'
import lemon from '../public/Revised_Lemon.png'
import Image from 'next/image'
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { CgArrowsV } from "react-icons/cg";

export default function Expenses() {
    return (
        <Layout>
           <div className={styles.mainContainer}>
            <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr className={styles.theadTr}>
                                <th className={styles.th}><CgArrowsV/> Date</th>
                                <th className={styles.th}><CgArrowsV/> Property</th>
                                <th className={styles.th}><CgArrowsV/> Category</th>
                                <th className={styles.th}><CgArrowsV/> Description</th>
                                <th className={styles.th}><CgArrowsV/> Amount</th>
                                <th className={styles.th}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.tr}>
                                <td className={styles.thtd}>11/15/12</td>
                                <td className={styles.thtd}>1405 Ridge Dr.</td>
                                <td className={styles.thtd}>Landscaping</td>
                                <td className={styles.thtd}>Paid Louis</td>
                                <td className={styles.thtd}>$115.00</td>
                                <td className={styles.thtd}>
                                <AiFillEdit />
                                <MdDelete/>
                                </td>
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