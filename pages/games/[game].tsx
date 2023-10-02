import styles from '@/styles/Play.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import RightArrow from '@/components/icons/RightArrow'
import PostGuessPopup from '@/components/post-guess-popup/PostGuessPopup'
import { gameRanks } from '@/utils/constants'
import { useMutation, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useSession } from 'next-auth/react'
import { createLocalGuess, getLocalGuessedClipIds, getLocalGuessStats } from '@/utils/localRequests'
import { Id } from '@/convex/_generated/dataModel'


const Play = () => {

    const router = useRouter()

    const [game, setGame] = useState<string>()

    const [hoveringLockInt, setHoveringLockInt] = useState<boolean>()
    const [currentSelectedRank, setCurrentSelectedRank] = useState<number>()
    const [showPostGuessPopup, setShowPostGuessPopup] = useState<boolean>(false)
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const { data: session } = useSession()

    const userClips = useQuery(api.clips.getLateststNotGuessedClip, game && session?.user?.email ? {
        email: session?.user?.email,
        game: game
    } : "skip")

    const guestUserClips = useQuery(api.clips.getLastestNotGuessedClipGuest, game && session === null ? {
        game: game,
        alreadyGuessedClips: getLocalGuessedClipIds(game) as Id<"clips">[]
    } : "skip")

    const user = useQuery(api.users.getUserByEmail, session?.user?.email ? {
        email: session?.user?.email
    }:  "skip")

    const userGuessingStats = useQuery(api.guesses.getGuessStats, game && user ? {
        userId: user._id,
        currentGame: game
    } : "skip")

    const clipCreatorUser = useQuery(api.users.getUserById, userClips?.length || guestUserClips?.length ? {
        userId: userClips ? userClips[currentIndex].userId : guestUserClips![currentIndex].userId
    } : "skip")

    const createGuess = useMutation(api.guesses.createGuess)

    const [latestCorrectRank, setLatestCorrectRank] = useState<string>("")
    const [latestClipAuthor, setLatestClipAuthor] = useState<string>("")
    const [latestGuessedRank, setLatestGuessedRank] = useState<string>("")

    const stashData = () => {
        if(!game || currentSelectedRank === undefined) return

        if(userClips) {
            setLatestCorrectRank(userClips[currentIndex].rank)
        } else if(guestUserClips) {
            setLatestCorrectRank(guestUserClips[currentIndex].rank)
        }

        setLatestGuessedRank(gameRanks[game].ranks[currentSelectedRank].name)
        setLatestClipAuthor(clipCreatorUser?.username || '')
    }

    const onGuessSubmit = async () => {
        if(currentSelectedRank === undefined || !game) return

        if(userClips && user) {
            await createGuess({
                userId: user._id,
                clipId: userClips[currentIndex]._id,
                game: game,
                rankGuessed: gameRanks[game].ranks[currentSelectedRank].name,
                correctRank: userClips[currentIndex].rank
            })
        } else if (guestUserClips) {
            createLocalGuess(guestUserClips[currentIndex]._id, gameRanks[game].ranks[currentSelectedRank].name, guestUserClips[currentIndex].rank, game)
        }

    }

    useEffect(() => {
        if (router.isReady) {
            setGame(router.query.game as string)
        }
    }, [router.isReady])

    const getEmbedWidth = () => {
        if(!window) return
        return window.innerWidth <= 600 ? '90vw' : '60vw'
    }

    const getRankItemDimensions = (length: number) => {
        if(!window) return
        if(window.innerWidth <= 600) return `calc((${getEmbedWidth()} - ${length - 0}rem) / 4)`
        return `calc((${getEmbedWidth()} - ${length - 1}rem) / ${length})`
    }

    if (!game || !(userClips || guestUserClips)) return <></>

    if(userClips?.length === 0 || guestUserClips?.length === 0) {
        return (
            <>
                <Navbar />
                <div className={styles.container}>
                    <h1 className={styles.title}>Out of clips for this game :(</h1>
                    <p className={styles.suggestion}>you should submit one!</p>
                </div>
            </>

        )
    }

    const currentClip = userClips ? userClips[currentIndex] : guestUserClips && guestUserClips[currentIndex]
    const guessingStats = userGuessingStats ? userGuessingStats : getLocalGuessStats(game)

    // reset the selected rank
    const reset = (showPopup: boolean) => {
        setCurrentSelectedRank(undefined);
        setShowPostGuessPopup(showPopup);
    }

    return (
        <>
            {showPostGuessPopup && <PostGuessPopup
                isGuest={session === null}
                clipAuthor={latestClipAuthor}
                currentGamePoints={guessingStats.gamePoints}
                overallPoints={guessingStats.overallPoints}
                game={game} correctRank={latestCorrectRank}
                guessedRank={latestGuessedRank}
                setShowPostGuessPopup={reset}
            />}
            <Navbar />
            <div className={styles.container}>
                <h2 className={styles["guess-name"]}>Guess <span style={{ color: '#354AA1' }}>#{guessingStats.currentGameGuessNumber}</span></h2>
                <div className={styles["embed-container"]}>
                    <iframe style={{ border: 'none' }} width="100%" height="100%" src={currentClip?.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
                <div className={styles["ranks-container"]}>
                    {gameRanks[game].ranks.map((rank, index) => {

                        let rankItemDimensions = getRankItemDimensions(gameRanks[game].ranks.length)
                        let rankItemHeightMultiplier = gameRanks[game].imageSizeMultiplierHeight
                        let rankItemWidthMultiplier = gameRanks[game].imageSizeMultiplierWidth

                        return (
                            <div
                                key={index}
                                onClick={() => setCurrentSelectedRank(index)}
                                className={styles.rank}
                                style={{
                                    width: rankItemDimensions,
                                    height: rankItemDimensions,
                                    border: currentSelectedRank === index ? '1px solid #354AA1' : 'none'
                                }}
                            >
                                <div className={styles["rank-image-container"]} style={{ height: `calc(${rankItemDimensions} * ${rankItemHeightMultiplier})`, width: `calc(${rankItemDimensions} * ${rankItemWidthMultiplier})` }}>
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
                    disabled={currentSelectedRank === undefined}
                    data-grayout={currentSelectedRank === undefined}
                    onClick={() => {
                        setShowPostGuessPopup(true)
                        stashData()
                        if(guestUserClips) {
                            setTimeout(() => {
                                onGuessSubmit()
                            }, 500)
                        }
                        else {
                            onGuessSubmit()
                        }
                    }}
                >
                    <motion.h2
                        className={styles["button-text"]}
                        animate={{
                            x: hoveringLockInt ? -10 : 0
                        }}
                    >Lock Guess</motion.h2>
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
