import styles from '@/styles/Play.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Navbar from '@/components/navbar/Navbar'
import GameRanks from '@/utils/types'
import Image from 'next/image'
import { motion } from 'framer-motion'
import RightArrow from '@/components/icons/RightArrow'

const gameRanks: GameRanks = {
    valorant: {
        ranks: [
            {
                name: 'iron',
                image: '/ranks/valorant/valorant-iron.png'
            },
            {
                name: 'bronze',
                image: '/ranks/valorant/valorant-bronze.png'
            },
            {
                name: 'silver',
                image: '/ranks/valorant/valorant-silver.png'
            },
            {
                name: 'gold',
                image: '/ranks/valorant/valorant-gold.png'
            },
            {
                name: 'platinum',
                image: '/ranks/valorant/valorant-platinum.png'
            },
            {
                name: 'diamond',
                image: '/ranks/valorant/valorant-diamond.png'
            },
            {
                name: 'immortal',
                image: '/ranks/valorant/valorant-immortal.png'
            },
            {
                name: 'radiant',
                image: '/ranks/valorant/valorant-radiant.png'
            }
        ]
    },

}

const Play = () => {

    const router = useRouter()

    const [game, setGame] = useState<string>()

    const [hoveringLockInt, setHoveringLockInt] = useState<boolean>()

    useEffect(() => {
        if (router.isReady) {
            setGame(router.query.game as string)
        }
    }, [router.isReady])

    const getRankItemDimensions = (length: number) => {
        return `calc((60vw - ${length - 1}rem) / ${length})`
    }

    const getRankItemImageDimensions = (length: number) => {
        return `calc((60vw - ${length - 1}rem) / ${length} / 1.4)`
    }

    if (!game) return <></>

    console.log(game, gameRanks[game].ranks)

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <h2 className={styles["guess-name"]}>Guess <span style={{ color: '#354AA1' }}>#42</span></h2>
                <div className={styles["embed-container"]}>
                    <iframe style={{ border: 'none' }} width="100%" height="100%" src="https://www.youtube.com/embed/A79AoUqD8Do?si=jJGnsv-kJ-0LnhlA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
                <div className={styles["ranks-container"]}>
                    {gameRanks[game].ranks.map((rank, index) => {
                        return (
                            <div key={index} className={styles.rank} style={{ width: getRankItemDimensions(gameRanks[game].ranks.length), height: getRankItemDimensions(gameRanks[game].ranks.length) }}>
                                <div className={styles["rank-image-container"]} style={{ height: getRankItemImageDimensions(gameRanks[game].ranks.length), width: getRankItemImageDimensions(gameRanks[game].ranks.length) }}>
                                    <Image
                                        fill
                                        src={rank.image}
                                        alt='rank image'
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <motion.button
                    className={styles["submit-button"]}
                    onMouseEnter={() => setHoveringLockInt(true)}
                    onMouseLeave={() => setHoveringLockInt(false)}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => router.push('/games')}
                >
                    <motion.h2 
                        className={styles["button-text"]}
                        animate={{
                            x: hoveringLockInt ? -10 : 0
                        }}
                    >Get Started</motion.h2>
                    <motion.div
                        animate={{
                            x: hoveringLockInt ? 10 : 0
                        }}
                        className={styles["arrow-icon-container"]}
                    >
                        <RightArrow />
                    </motion.div>
                </motion.button>
            </div>
        </>

    )

}

export default Play