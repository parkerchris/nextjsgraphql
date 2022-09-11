import Layout from '../components/Layout'
import InfoCard from '../components/InfoCard'
import styles from '../styles/Testtesttest.module.css'
import ContentHeader from '../components/ContentHeader'
import LayoutTwo from '../components/LayoutTwo'
import ContentHeaderTwo from '../components/ContentHeaderTwo'
import PropertyCardTwo from '../components/PropertyCardTwo'

export default function Testtesttest() {
    return (
        <LayoutTwo>
            <div className={styles.content}>
                <div className={styles.container}>
                    <PropertyCardTwo/>
                </div>
            </div>
        </LayoutTwo>
    )
}