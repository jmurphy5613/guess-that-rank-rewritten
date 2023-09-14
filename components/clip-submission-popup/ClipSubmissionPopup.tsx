import styles from './ClipSubmissionPopup.module.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/router'
import RightArrow from '../icons/RightArrow'
import Home from '../icons/Home'

const ClipSubmissionPopup = () => {

    const [hoveringGoHome, setHoveringGoHome] = useState<boolean>()

    const router = useRouter()

    return (
        <div className={styles.backdrop}>
            <div className={styles.container}>
                <h1 className={styles.title}>Thank you for submitting your clip!</h1>
                <p className={styles.description}>We will review your clip and add it to the site as soon as possible.</p>
                <motion.button
                    className={styles["submit-button"]}
                    onMouseEnter={() => setHoveringGoHome(true)}
                    onMouseLeave={() => setHoveringGoHome(false)}
                    onClick={() => router.push('/games')}
                >
                    <motion.h2
                        className={styles["button-text"]}
                        animate={{
                            x: hoveringGoHome ? -10 : 0
                        }}
                    >Home</motion.h2>
                    <motion.div
                        animate={{
                            x: hoveringGoHome ? 10 : 0
                        }}
                        className={styles["home-icon-container"]}
                    >
                        <Home />
                    </motion.div>
                </motion.button>
            </div>
        </div>
    )
}

export default ClipSubmissionPopup