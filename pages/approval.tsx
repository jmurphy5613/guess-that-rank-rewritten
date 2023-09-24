import styles from '@/styles/Approval.module.css'
import { useMutation, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useState } from 'react'
import { getMP4FromLink } from '@/utils/conversions'

const Approval = () => {

    const latestNotApprovedClip = useQuery(api.clips.getLatestNotApprovedClip)
    const approveClip = useMutation(api.clips.approveClip)
    const rejectClip = useMutation(api.clips.rejectClip)

    const [actualLink, setActualLink] = useState(latestNotApprovedClip ? latestNotApprovedClip.link : '')
    const [showSuggestedLink, setShowSuggestedLink] = useState(false)

    const handleNext = () => {
        if(!latestNotApprovedClip?._id) return
        rejectClip({
            clipId: latestNotApprovedClip._id
        })
    }

    const handleApprove = () => {
        if(!latestNotApprovedClip?._id) return
        approveClip({
            clipId: latestNotApprovedClip._id,
            actualLink: actualLink
        })
    }

    if(!latestNotApprovedClip) return <></>

    console.log(latestNotApprovedClip)

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Clip Approval</h1>
            <div className={styles.content}>
                <h2 className={styles["clip-info"]}><span className={styles.grey}>Game:</span> {latestNotApprovedClip?.game}</h2>
                <h2 className={styles["clip-info"]}><span className={styles.grey}>Rank:</span> {latestNotApprovedClip?.rank}</h2>
                <h2 className={styles["clip-info"]}><span className={styles.grey}>Link:</span> {latestNotApprovedClip?.link}</h2>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input className={styles.link} onChange={(e) => setActualLink(e.target.value)} placeholder='actual link' />
                    <button onClick={() => {
                        setShowSuggestedLink(!showSuggestedLink)
                    }} className={styles["show-link-button"]}>toggle suggested link</button>
                </div>
                <p className={styles["suggested-link"]}>{showSuggestedLink && getMP4FromLink(latestNotApprovedClip.link)}</p>
                <div className={styles["button-group"]}>
                    <button className={styles.approve} onClick={handleApprove}>Approve</button>
                    <button className={styles.next} onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Approval