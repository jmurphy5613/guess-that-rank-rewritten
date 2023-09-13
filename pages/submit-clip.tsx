import Navbar from '@/components/navbar/Navbar'
import styles from '@/styles/SubmitClip.module.css'
import Select from 'react-select'
import { motion } from 'framer-motion'
import { useState } from 'react'
import RightArrow from '@/components/icons/RightArrow'
import { gameOptions } from '@/utils/constants'


const selectStyles = {
    valueContainer: (provided: any, state: any) => ({
        ...provided,
        height: '60px',
        color: '#fff',
        backgroundColor: '#1B1C26',
        outline: 'none',
        border: 'none',
        fontFamily: 'Outfit, sans-serif',
        borderRadius: '1rem',

    }),
    control: (provided: any, state: any) => ({
        ...provided,
        height: '60px',
        backgroundColor: '#1B1C26',
        border: 'none',
        borderRadius: '1rem',
    }),
    input: (provided: any, state: any) => ({
        ...provided,
        color: '#626262',
        outline: 'none',
        border: 'none',
        borderRadius: '1rem',
    }),
    indicatorSeparator: (state: any) => ({
        display: 'none',
    }),
    dropdownIndicator: (state: any) => ({
        ...state,
        color: '#626262',
        '&:hover': {
            color: '#fff',
        }
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        color: '#626262',
        backgroundColor: "#1B1C26",
        fontFamily: 'Outfit, sans-serif',
        fontSize: '1rem',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#2A2B3A',
        },
        height: '60px',
        display: 'flex',
        alignItems: 'center',

    }),
    menu: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: '#1B1C26',
        border: 'none',
        fontFamily: 'Outfit, sans-serif',
        color: '#626262',
    }),
    container: (provided: any, state: any) => ({
        ...provided,
        marginTop: '1rem',
        borderRadius: '1rem',
        color: '#626262',
    }),
    singleValue: (provided: any, state: any) => ({
        ...provided,
        color: "#fff"
    })

}


const SubmitClip = () => {

    const [hoveringSubmit, setHoveringSubmit] = useState<boolean>()

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>Submit <span className={styles.blue}>your clip.</span></h1>
                <div className={styles["form-container"]}>
                    <Select
                        options={gameOptions}
                        placeholder="Select a game"
                        styles={selectStyles}
                    />
                    <Select
                        options={gameOptions}
                        placeholder="Select a rank"
                        styles={selectStyles}
                    />
                    <input className={styles["clip-input"]} placeholder="Clip url (twitch, youtube, medal)" />
                    <input className={styles["clip-input"]} placeholder="Name for credit" />
                    <input className={styles["clip-input"]} placeholder="Valorant username + tag ex. Cosmic#4473" />
                    <motion.button
                        className={styles["submit-button"]}
                        onMouseEnter={() => setHoveringSubmit(true)}
                        onMouseLeave={() => setHoveringSubmit(false)}
                    // onClick={() => router.push('/games')}
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