import Navbar from "@/components/navbar/Navbar"
import GameGrid from "@/components/game-grid/GameGrid"
import styles from '@/styles/Games.module.css'

const Games = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>Select <span className={styles.blue}>your game.</span></h1>
                <GameGrid />
            </div>
        </>
    )
}

export default Games