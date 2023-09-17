import Navbar from '@/components/navbar/Navbar'
import styles from '@/styles/SubmitClip.module.css'
import Select, { SingleValue } from 'react-select'
import { motion } from 'framer-motion'
import { useState } from 'react'
import RightArrow from '@/components/icons/RightArrow'
import { gameOptions, selectStyles } from '@/utils/constants'
import { ReactSelectType } from '@/utils/types'
import { createSelectArray } from '@/utils/conversions'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import ClipSubmissionPopup from '@/components/clip-submission-popup/ClipSubmissionPopup'
import { getMP4FromLink } from '@/utils/conversions'

const SubmitClip = () => {

    const [hoveringSubmit, setHoveringSubmit] = useState<boolean>()

    const [gameSelected, setGameSelected] = useState<ReactSelectType>()
    const [rankSelected, setRankSelected] = useState<ReactSelectType>()
    const [clipUrl, setClipUrl] = useState<string>()
    const [name, setName] = useState<string>()
    const [username, setUsername] = useState<string>()

    const [notAllFieldsFilled, setNotAllFieldsFilled] = useState<boolean>(false)

    const [showThankyouModal, setShowThankyouModal] = useState<boolean>(false)

    const createClip = useMutation(api.clips.createClip)

    const handleSubmit = async () => {
        if (!gameSelected || !rankSelected || !clipUrl || !name || !username) {
            setNotAllFieldsFilled(true)
            return
        }
        const clipId = await createClip({
            game: gameSelected.value,
            rank: rankSelected.value,
            link: clipUrl,
            nameCredit: name,
            username: username
        })

        if (clipId) {
            setShowThankyouModal(true)
        }

    }

    return (
        <>
            {showThankyouModal && <ClipSubmissionPopup />}
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>Submit <span className={styles.blue}>your clip.</span></h1>
                <div className={styles["form-container"]}>
                    <Select
                        options={gameOptions}
                        placeholder="Select a game"
                        styles={selectStyles}
                        value={gameSelected}
                        //@ts-ignore
                        onChange={(e) => setGameSelected(e)}
                    />
                    <Select
                        options={gameSelected && createSelectArray(gameSelected.value)}
                        placeholder="Select a rank"
                        styles={selectStyles}
                        //@ts-ignore
                        onChange={(e) => setRankSelected(e)}
                    />
                    <input className={styles["clip-input"]}
                        placeholder="Clip url (twitch clip, youtube, medal)"
                        onChange={(e) => {
                            setClipUrl(e.target.value)
                            console.log(getMP4FromLink(e.target.value))
                        }} 
                    />
                    <input className={styles["clip-input"]} onChange={(e) => setClipUrl(e.target.value)} placeholder="Name for credit" />
                    <input className={styles["clip-input"]} placeholder="Valorant username + tag ex. Cosmic#4473" />
                    <p className={styles.error}
                        onClick={() => setNotAllFieldsFilled(false)}
                    >{notAllFieldsFilled && "please fill out all the fields, we kinda need those :))))  (click on this to not see red)"}</p>
                    <motion.button
                        className={styles["submit-button"]}
                        onMouseEnter={() => setHoveringSubmit(true)}
                        onMouseLeave={() => setHoveringSubmit(false)}
                        onClick={handleSubmit}
                    >
                        <motion.h2
                            className={styles["button-text"]}
                            animate={{
                                x: hoveringSubmit ? -10 : 0
                            }}
                        >Submit</motion.h2>
                        <motion.div
                            animate={{
                                x: hoveringSubmit ? 10 : 0
                            }}
                            className={styles["arrow-icon-container"]}
                        >
                            <RightArrow />
                        </motion.div>
                    </motion.button>
                </div>
            </div>
        </>

    )
}

export default SubmitClip