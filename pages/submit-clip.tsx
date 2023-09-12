import Navbar from '@/components/navbar/Navbar'
import styles from '@/styles/SubmitClip.module.css'

const SubmitClip = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>Submit <span className={styles.blue}>your clip.</span></h1>
                <div className={styles["form-container"]}>

                </div>
            </div>
        </>

    )
}

export default SubmitClip