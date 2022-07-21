import styles from "../styles/Header.module.css"

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div>
                    <h1 className={styles.logo}>MOSAIC</h1>
                </div>
                <div>
                    <div className={styles.searchbar}></div>
                </div>
                <div>
                    <div className={styles.avatar}><p className={styles.avatarDefault}>CP</p></div>
                </div>
            </div>
        </div>
    )
}