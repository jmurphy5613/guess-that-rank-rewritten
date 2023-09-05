import styles from '@/styles/Play.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Navbar from '@/components/navbar/Navbar'

const Play = () => {

    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
            console.log(router.query.game)
        }
    }, [router.isReady])

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles["embed-container"]}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/A79AoUqD8Do?si=jJGnsv-kJ-0LnhlA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
            </div>
        </>

    )

}

export default Play