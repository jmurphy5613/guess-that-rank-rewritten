import { GameRanks, ReactSelectType } from "./types"

export const gameRanks: GameRanks = {
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
    csgo: {
        ranks: [
            {
                name: 'silver',
                image: '/ranks/csgo/csgo-silver.png'
            },
            {
                name: 'nova',
                image: '/ranks/csgo/csgo-nova.png'
            },
            {
                name: 'guardian',
                image: '/ranks/csgo/csgo-guardian.png'
            },
            {
                name: 'mge',
                image: '/ranks/csgo/csgo-ak.png'
            },
            {
                name: 'dmg',
                image: '/ranks/csgo/csgo-dmg.png'
            },
            {
                name: 'eagle',
                image: '/ranks/csgo/csgo-eagle.png'
            },
            {
                name: 'supreme',
                image: '/ranks/csgo/csgo-supreme.png'
            },
            {
                name: 'global',
                image: '/ranks/csgo/csgo-global.png'
            }
        ]
    }
}

export const gameOptions = [
    {
        value: 'valorant',
        label: 'Valorant'
    },
    {
        value: 'csgo',
        label: 'CS:GO'
    }
]

export const selectStyles = {
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