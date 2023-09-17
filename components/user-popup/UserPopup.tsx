import Leave from '../icons/Leave'
import styles from './UserPopup.module.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { signOut } from 'next-auth/react'

const UserPopup = () => {

    const [hoveringLogout, setHoveringLogout] = useState(false)

    return (
        <div className={styles.container}>
            <motion.button className={styles.logout}
                onMouseEnter={() => setHoveringLogout(true)}
                onMouseLeave={() => setHoveringLogout(false)}
                whileHover={{ scale: 1.1 }}
                onClick={() => signOut()}
            >
                <motion.div className={styles["icon-container"]}
                    animate={{
                        x: hoveringLogout ? -10 : 0
                    }}
                >
                    <Leave />
                </motion.div>
                <motion.h2
                    className={styles["button-text"]}
                    animate={{
                        x: hoveringLogout ? 10 : 0
                    }}
                >logout</motion.h2>
            </motion.button>
        </div>
    )
}

export default UserPopup