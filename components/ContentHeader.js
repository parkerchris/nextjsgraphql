import styles from '../styles/ContentHeader.module.css'

export default function ContentHeader(props) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.containerone}>
                <h3 className={styles.h3}>PROPERTIES</h3>
                <p className={styles.p}>Pod: Parker Properties | City: Chico</p>
            </div>
            <div className={styles.containertwo}>
                <button className={styles.filterButton}>Filter</button>
                <button className={styles.addButton}>Add a property</button>
            </div>
        </div>
    )
}