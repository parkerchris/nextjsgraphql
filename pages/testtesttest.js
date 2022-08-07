import Layout from '../components/Layout'
import InfoCard from '../components/InfoCard'
import styles from '../styles/Testtesttest.module.css'
import ContentHeader from '../components/ContentHeader'

export default function Testtesttest() {
    return (
       <div className={styles.mainContainer}>
            <ContentHeader />
            <div className={styles.middlediv}>MIDDLE</div>
            <div className={styles.bottomdiv}>BOTTOM</div>
       </div>
    )
}