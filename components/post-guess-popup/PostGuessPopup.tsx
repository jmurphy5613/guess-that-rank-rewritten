import { motion } from 'framer-motion'
import styles from './PostGuessPopup.module.css'
import Image from 'next/image';

interface PostGuessPopupProps {
    setShowPostGuessPopup: (show: boolean) => void;
}

const PostGuessPopup: React.FC<PostGuessPopupProps> = ({ setShowPostGuessPopup }) => {
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
                    </div>
                    <div className={styles.stat} style={{ marginLeft: '0.5rem' }}>

                    </div>
                </div>
                <div className={styles.footer}>

                </div>
            </motion.div>
        </motion.div>
    )
}

export default PostGuessPopup