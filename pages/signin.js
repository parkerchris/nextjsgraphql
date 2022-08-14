import styles from '../styles/SignIn.module.css'
import Link from 'next/link'


export default function SignIn() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerLeft}></div>
            <div className={styles.mainContainerRight}>
                <form className={styles.form}>
                    <h1 className={styles.h1}>Welcome back</h1>
                    <p className={styles.p}>please enter your details</p>
                    <input
                        className={styles.input}
                        placeholder="Email"/>
                    <input
                        className={styles.input}
                        placeholder="Password"/>
                    <button 
                        className={styles.button}
                        >Create Account</button>
                    <p className={styles.p}>Don't have an account?
                        <Link href="/signup">
                            <a>
                                <span className={styles.span}>Sign up</span>
                            </a>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}