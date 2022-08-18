import styles from '../styles/LayoutTwo.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Link from 'next/link'
import { FaCreditCard } from "react-icons/fa";
import { FaPaintRoller } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import { BiGlobe } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { BsPersonPlus } from "react-icons/bs";
import { TbPaint } from "react-icons/tb"
import { FiMapPin } from "react-icons/fi"

export default function LayoutTwo({children}) {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.logoContainer}>
                        <HiMenuAlt3 className={styles.menuIcon}/>
                        <h1 className={styles.logo}>MOSAIC</h1>
                    </div>
                    <div>
                        <div className={styles.searchbar}>
                            <IoSearch className={styles.searchIcon}/>
                            <p className={styles.searchText}>Search by property, partner, expense...</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.avatar}><p className={styles.avatarDefault}>CP</p></div>
                    </div>
                </div>
            </div>
            <div className={styles.nav}>
                <div className={styles.innerContainer}>
                    <p className={styles.p}>MAIN MENU</p>
                    <Link href="/">
                        <a  className={styles.anchor}>
                            <div className={styles.linkGroup}>
                                <RiHome2Fill className={styles.icon}/>
                                <h3 className={styles.font}>Home</h3>
                            </div>
                        </a>
                    </Link>
                    <Link href="/properties">
                        <a  className={styles.anchor}>
                            <div className={styles.linkGroup}>
                                <FiMapPin className={styles.icon}/>
                                <h3 className={styles.font}>Properties</h3>
                            </div>
                        </a>
                    </Link>
                    <Link href="/properties">
                        <a  className={styles.anchor}>
                            <div className={styles.linkGroup}>
                                <BsPersonPlus className={styles.icon}/>
                                <h3 className={styles.font}>Partners</h3>
                            </div>
                        </a>
                    </Link>
                    <Link href="/maintenance">
                        <a  className={styles.anchor}>
                            <div className={styles.linkGroup}>
                                <TbPaint className={styles.icon}/>
                                <h3 className={styles.font}>Maintenance</h3>
                            </div>
                        </a>
                    </Link>
                    <Link href="/expenses">
                        <a  className={styles.anchor}>
                            <div className={styles.linkGroup}>
                                <FaCreditCard className={styles.icon}/>
                                <h3 className={styles.font}>Expenses</h3>
                            </div>
                        </a>
                    </Link>
                    
                   
                    <div className={styles.placeholder}></div>
                    <p className={styles.p}>SETTINGS</p>
                    <Link href="/expenses">
                        <a  className={styles.anchor}>
                            <div className={styles.linkGroup}>
                                <FaCreditCard className={styles.icon}/>
                                <h3 className={styles.font}>Expenses</h3>
                            </div>
                        </a>
                    </Link>
                    <Link href="/expenses">
                        <a  className={styles.anchor}>
                            <div className={styles.linkGroup}>
                                <FaCreditCard className={styles.icon}/>
                                <h3 className={styles.font}>Expenses</h3>
                            </div>
                        </a>
                    </Link>
                    <Link href="/expenses">
                        <a  className={styles.anchor}>
                            <div className={styles.linkGroup}>
                                <FaCreditCard className={styles.icon}/>
                                <h3 className={styles.font}>Expenses</h3>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.content}>{children}</div>
            <div className={styles.footer}>
                <div className={styles.innerFooterContainer}>
                    <div className={styles.innerFooterOne}>
                        <p className={styles.pLeft}>© Mosaic, Inc.</p>
                        <p className={styles.pLeft}>Privacy</p>
                        <p className={styles.pLeft}>Terms</p>
                        <p className={styles.pLeft}>Sitemap</p>
                        <p className={styles.pLeft}>Contact</p>
                    </div>
                    <div className={styles.innerFooterTwo}>
                        <BiGlobe />
                        <p className={styles.pRight}>English</p>
                        <p className={styles.pRight}>Support & Resources</p>
                        <IoIosArrowUp />
                    </div>
                </div>
            </div>
        </div>
    )
}