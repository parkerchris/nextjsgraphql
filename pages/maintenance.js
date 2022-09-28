import Layout from '../components/Layout'
import LayoutTwo from '../components/LayoutTwo'
import MaintenanceCard from '../components/MaintenanceCard'
import styles from '../styles/maintenance.module.css'
import ContentHeader from '../components/ContentHeader'
import LayoutThree from '../components/LayoutThree'

export default function Maintenance() {
    return (
        <LayoutThree>
            <div className={styles.mainContentContainer}>
                <div className={styles.innerContainer}>
                    <ContentHeader/>
                    <h2 className={styles.header}>Open</h2>
                    <MaintenanceCard/>
                    <MaintenanceCard/>
                    <h2 className={styles.header}>Closed</h2>
                    <MaintenanceCard/>
                    <MaintenanceCard/>
                    <MaintenanceCard/>
                </div>

            </div>
        </LayoutThree>
    )
}