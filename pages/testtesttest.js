import Layout from '../components/Layout'
import InfoCard from '../components/InfoCard'
import styles from '../styles/Testtesttest.module.css'
import ContentHeader from '../components/ContentHeader'
import LayoutTwo from '../components/LayoutTwo'
import ContentHeaderTwo from '../components/ContentHeaderTwo'

export default function Testtesttest() {
    return (
        <LayoutTwo>
            <div className={styles.content}>
                <div className={styles.container}>
                    <ContentHeaderTwo/>
                    <div className={styles.image}>
                        <h1 className={styles.pp}>This is a p</h1>
                    </div>
                    <h1 className={styles.h3}>1405 Ridge Dr.</h1>
                    <h2 className={styles.h3}>1405 Ridge Dr.</h2>
                    <h3 className={styles.h3}>1405 Ridge Dr.</h3>
                    <h4 className={styles.h3}>1405 Ridge Dr.</h4>
                    <p className={styles.p}>Redding, CA</p>
                </div>
            </div>
        </LayoutTwo>
    )
}