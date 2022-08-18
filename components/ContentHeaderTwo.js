import styles from '../styles/ContentHeaderTwo.module.css'

export default function ContentHeaderTwo(props) {

    console.log(props)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.containerone}>
                    <h3 className={styles.h3}>PROPERTIES</h3>
                </div>
                <div className={styles.containertwo}>
                    <button className={styles.filterButton}>Filter</button>
                    <button 
                        className={styles.addButton}
                        onClick={props.handleClick}
                        >Add a property</button>
                </div>
            </div>
        </div>
    )
}