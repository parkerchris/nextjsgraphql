import styles from '../styles/SignUp.module.css'
import Link from 'next/link'

export default function SignUp() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerLeft}></div>
            <div className={styles.mainContainerRight}>
                <form className={styles.form}>
                    <h1 className={styles.h1}>Create an account</h1>
                    <p className={styles.p}>Let's get started</p>
                    <input
                        className={styles.input}
                        placeholder="Name"/>
                    <input
                        className={styles.input}
                        placeholder="Email"/>
                    <input
                        className={styles.input}
                        placeholder="Password"/>
                    <button 
                        className={styles.button}
                        >Create Account</button>
                    <p className={styles.p}>Already have an account?
                        <Link href="/signin">
                            <a>
                                <span className={styles.span}>Log in</span>
                            </a>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}