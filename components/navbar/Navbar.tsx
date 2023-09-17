import styles from './Navbar.module.css'
import Logo from '@/components/icons/Logo'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'

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

    const { data: session } = useSession()

    const [showPopup, setShowPopup] = useState(false)

    console.log(session)


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
            {session && session.user?.image ? (
                <div className={styles["user-icon-container"]}>
                    <Image 
                        src={session.user.image}
                        fill
                        alt="User Icon"
                        style={{ borderRadius: '100%' }}
                    />
                </div>
            ) : (
                <div className={styles["auth-container"]}>
                    <button className={styles["signin-button"]} onClick={() => signOut()}>Sign out</button>
                    <button className={styles["signup-button"]} onClick={() => signIn()}>Sign In</button>
                </div>
            )}


        </div>
    )
}

export default Navbar