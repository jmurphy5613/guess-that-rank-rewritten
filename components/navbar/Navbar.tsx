import styles from './Navbar.module.css'
import Logo from '@/components/icons/Logo'

const links = [
    {
        name: 'Games',
        href: '/games'
    },
    {
        name: 'Leaderboard',
        href: '/leaderboard'
    },
    {
        name: 'Submit Clip',
        href: '/submit-clip'
    },
]

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles["left"]}>
                <div className={styles["logo-image-container"]}>
                    <Logo stroke="#354DA1" />
                </div>
                <h1 className={styles.title}>GuessThatRank</h1>
                <div className={styles.links}>
                    {links.map((link, index) => (
                        <a className={styles.link} href={link.href}>{link.name}</a>
                    ))}
                </div>
            </div>
            <div className={styles["auth-container"]}>
                <button className={styles["signin-button"]}>Sign in</button>
                <button className={styles["signup-button"]}>Sign up</button>
            </div>
        </div>
    )
}

export default Navbar