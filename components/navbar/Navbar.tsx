import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles["left"]}>

            </div>
            <div className={styles["auth-container"]}>
                <button className={styles["signin-button"]}>Sign in</button>
                <button className={styles["signup-button"]}>Sign up</button>
            </div>
        </div>
    )
}

export default Navbar