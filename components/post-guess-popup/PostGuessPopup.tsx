import { motion } from 'framer-motion'
import styles from './PostGuessPopup.module.css'
import Image from 'next/image';
import CountUp from 'react-countup';
import UpArrow from '../icons/UpArrow';
import { useState } from 'react';
import RightArrow from '../icons/RightArrow';

interface PostGuessPopupProps {
    setShowPostGuessPopup: (show: boolean) => void;
}

const PostGuessPopup: React.FC<PostGuessPopupProps> = ({ setShowPostGuessPopup }) => {

    const [showArrow, setShowArrow] = useState<boolean>(false)
    const [hoveringNext, setHoveringNext] = useState<boolean>(false)

    return (
        <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .2 }}
            onClick={() => setShowPostGuessPopup(false)}
        >
            <motion.div
                className={styles.container}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: .2 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.ranks}>
                    <div className={styles.answer}>
                        <h2 className={styles["wrong-title"]}>Wrong Answer</h2>
                        <div className={styles["rank-container"]}>
                            <Image
                                src="/ranks/valorant/valorant-iron.png"
                                fill
                                alt="Valorant Iron Rank"
                            />
                        </div>
                    </div>
                    <div className={styles.answer}>
                        <h2 className={styles["correct-title"]}>Correct Answer</h2>
                        <div className={styles["rank-container"]}>
                            <Image
                                src="/ranks/valorant/valorant-diamond.png"
                                fill
                                alt="Valorant Iron Rank"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.stats}>
                    <div className={styles.stat} style={{ marginRight: '0.5rem' }}>
                        <div className={styles["count-up-wrapper"]}>
                            <CountUp
                                start={0}
                                end={50}
                                className={styles["count-up"]}
                                onEnd={() => {
                                    setShowArrow(true)
                                }}
                            />``
                            <motion.div
                                className={styles["increase-icon-container"]}
                                animate={{
                                    opacity: showArrow ? 1 : 0,
                                    y: showArrow ? 0 : 10
                                }}
                                transition={{
                                    duration: .2
                                }}
                            >
                                {showArrow && <UpArrow stroke="#6EF36B" />}
                            </motion.div>
                        </div>
                        <h3 className={styles.description}>Valorant Points</h3>
                    </div>
                    <div className={styles.stat} style={{ marginLeft: '0.5rem' }}>
                        <div className={styles["count-up-wrapper"]}>
                            <CountUp
                                start={0}
                                end={96}
                                className={styles["count-up"]}
                                onCompleteCallback={() => {
                                    setShowArrow(true)
                                }}
                            />
                            <motion.div
                                className={styles["increase-icon-container"]}
                                animate={{
                                    opacity: showArrow ? 1 : 0,
                                    y: showArrow ? 0 : 10
                                }}
                                transition={{
                                    duration: .2
                                }}
                            >
                                {showArrow && <UpArrow stroke="#6EF36B" />}
                            </motion.div>
                        </div>

                        <h3 className={styles.description}>Overall Points</h3>
                    </div>
                </div>
                <div className={styles.footer}>
                    <h2 className={styles.credit}>Clip Credit: <span className={styles.blue}>Cosmic</span></h2>
                    <motion.button
                        className={styles["submit-button"]}
                        onMouseEnter={() => setHoveringNext(true)}
                        onMouseLeave={() => setHoveringNext(false)}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setShowPostGuessPopup(true)}
                    >
                        <motion.h2
                            className={styles["button-text"]}
                            animate={{
                                x: hoveringNext ? -10 : 0
                            }}
                        >Next</motion.h2>
                        <motion.div
                            animate={{
                                x: hoveringNext ? 10 : 0
                            }}
                            className={styles["arrow-icon-container"]}
                        >
                            <RightArrow />
                        </motion.div>
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default PostGuessPopup