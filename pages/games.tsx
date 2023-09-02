import Navbar from "@/components/navbar/Navbar"
import styles from '@/styles/Games.module.css'

const Games = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>Select <span className={styles.blue}>your game.</span></h1>
            </div>
        </>
    )
}

export default Games