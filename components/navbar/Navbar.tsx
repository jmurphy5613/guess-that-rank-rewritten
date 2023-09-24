import styles from './Navbar.module.css'
import Logo from '@/components/icons/Logo'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import UserPopup from '../user-popup/UserPopup'
import DownArrow from '../icons/DownArrow'
import { useMediaQuery } from 'react-responsive'

const links = [
    {
        name: 'Games',
        href: '/games'
    },
    {
        name: 'Submit Clip',
        href: '/submit-clip'
    },
]

const Navbar = () => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })

    function useOutsideAlerter(ref: React.RefObject<HTMLUnknownElement>) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event: { target: any; }) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowPopup(false)
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const { data: session } = useSession()

    const [showPopup, setShowPopup] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles["left"]}>
                {!isTabletOrMobile && (
                    <>
                        <div className={styles["logo-image-container"]}>
                            <Logo stroke="#354DA1" />
                        </div>
                        <h1 className={styles.title}>GuessThatRank</h1>
                    </>
                )}
                <div className={styles.links}>
                    {links.map((link, index) => (
                        <a key={index} className={styles.link} href={link.href}>{link.name}</a>
                    ))}
                </div>
            </div>
            {session && session.user?.image ? (
                <div style={{ display: 'flex', alignItems: 'center', position: 'relative', cursor: 'pointer' }} ref={wrapperRef} onClick={() => setShowPopup(true)}>
                    <div className={styles["user-icon-container"]}>
                        <Image
                            src={session.user.image}
                            fill
                            alt="User Icon"
                            style={{ borderRadius: '100%' }}
                        />
                    </div>
                    <div className={styles["arrow-icon-container"]}>
                        <DownArrow />
                    </div>
                    {showPopup && (
                        <UserPopup />
                    )}
                </div>

            ) : (
                <div className={styles["auth-container"]}>
                    <button className={styles["signup-button"]} onClick={() => signIn()}>Sign In</button>
                </div>
            )}


        </div>
    )
}

export default Navbar