import styles from './GameGrid.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const games = [
    {
        name: 'counter-strike',
        backgroundImage: '/games/csgo.png',
        titleImage: '/games/csgoName.png',
        height: 89,
        width: 190
    },
    {
        name: 'valorant',
        backgroundImage: '/games/valorant.png',
        titleImage: '/games/valorantName.png',
        height: 95,
        width: 222
    },
    {
        name: 'league-of-legends',
        backgroundImage: '/games/league.png',
        titleImage: '/games/leagueName.png',
        height: 102,
        width: 250
    },
    {
        name: 'rocket-league',
        backgroundImage: '/games/rl.png',
        titleImage: '/games/rlName.png',
        height: 83,
        width: 186
    },
    {
        name: 'overwatch',
        backgroundImage: '/games/overwatch.png',
        titleImage: '/games/overwatchName.png',
        width: 230,
        height: 30,
    },
]

const GameGrid = () => {

    const [gameHoveringIndex, setGameHoveringIndex] = useState(-1)

    const router = useRouter()

    return (
        <div className={styles.grid}>
            {games.map((game, index) => (
                <a href={`games/${game.name}`}>
                    <motion.div
                        className={styles.game}
                        style={{ backgroundImage: `url(${game.backgroundImage})`, backgroundPosition: 'center' }}
                        onMouseEnter={() => setGameHoveringIndex(index)}
                        onMouseLeave={() => setGameHoveringIndex(-1)}
                        whileHover={{ scale: 1.01, transition: { duration: 0.1 } }}
                    >
                        <div className={styles["game-overlay"]} />
                        <motion.div
                            className={styles["game-title-container"]}
                            animate={{
                                y: gameHoveringIndex === index ? -10 : 0
                            }}
                        >
                            <Image
                                src={game.titleImage}
                                alt="game title"
                                height={game.height}
                                width={game.width}
                            />
                        </motion.div>
                    </motion.div>
                </a>
            ))}
        </div>
    )
}

export default GameGrid;