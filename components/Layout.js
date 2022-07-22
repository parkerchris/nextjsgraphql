import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import styles from '../styles/Layout.module.css'
import Link from 'next/link'
import { FaCreditCard } from "react-icons/fa";
import { FaPaintRoller } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";


export default function Layout({ children }) {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
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
            <div className={styles.nav}>
                <div className={styles.innerContainer}>
                    <Link href="/">
                        <a  className={styles.anchor}>
                            <div className={styles.linkGroup}>
                                <RiHome2Fill />
                                <h3 className={styles.font}>Home</h3>
                            </div>
                        </a>
                    </Link>
                    <Link href="/properties">
                        <a  className={styles.anchor}>
                            <div className={styles.linkGroup}>
                                <FaMapPin />
                                <h3 className={styles.font}>Properties</h3>
                            </div>
                        </a>
                    </Link>
                    <Link href="/maintenance">
                        <a  className={styles.anchor}>
                            <div className={styles.linkGroup}>
                                <FaPaintRoller />
                                <h3 className={styles.font}>Maintenance</h3>
                            </div>
                        </a>
                    </Link>
                    <Link href="/expenses">
                        <a  className={styles.anchor}>
                            <div className={styles.linkGroup}>
                                <FaCreditCard />
                                <h3 className={styles.font}>Expenses</h3>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.content}>{children}</div>
            <div className={styles.footer}></div>
        </div>
    )
}