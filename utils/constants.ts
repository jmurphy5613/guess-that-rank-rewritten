import { GameData } from "./types"

export const gameRanks: GameData = {
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
        ],
        imageSizeMultiplierHeight: 0.7,
        imageSizeMultiplierWidth: 0.7
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
                name: 'dmg',
                image: '/ranks/csgo/csgo-dmg.png'
            },
            {
                name: 'eagle',
                image: '/ranks/csgo/csgo-le.png'
            },
            {
                name: 'lem',
                image: '/ranks/csgo/csgo-lem.png'
            },
            {
                name: 'supreme',
                image: '/ranks/csgo/csgo-smfc.png'
            },
            {
                name: 'global',
                image: '/ranks/csgo/csgo-ge.png'
            }
        ],
        imageSizeMultiplierHeight: 0.4,
        imageSizeMultiplierWidth: 0.9
    },
    league: {
        ranks: [
            {
                name: 'iron',
                image: '/ranks/league/league-iron.png'
            },
            {
                name: 'bronze',
                image: '/ranks/league/league-bronze.png'
            },
            {
                name: 'silver',
                image: '/ranks/league/league-silver.png'

            },
            {
                name: 'gold',
                image: '/ranks/league/league-gold.png'
            },
            {
                name: 'platinum',
                image: '/ranks/league/league-platinum.png'
            },
            {
                name: 'emerald',
                image: '/ranks/league/league-emerald.png'
            },
            {
                name: 'master',
                image: '/ranks/league/league-master.png'
            },
            {
                name: 'grandmaster',
                image: '/ranks/league/league-grandmaster.png'
            },
            {
                name: 'challenger',
                image: '/ranks/league/league-challenger.png'
            }
        ],
        imageSizeMultiplierHeight: 0.8,
        imageSizeMultiplierWidth: 0.8
    },
    rl: {
        ranks: [
            {
                name: 'bronze',
                image: '/ranks/rl/rl-bronze.png'
            },
            {
                name: 'silver',
                image: '/ranks/rl/rl-silver.png'
            },
            {
                name: 'gold',
                image: '/ranks/rl/rl-gold.png'
            },
            {
                name: 'platinum',
                image: '/ranks/rl/rl-platinum.png'
            },
            {
                name: 'diamond',
                image: '/ranks/rl/rl-diamond.png'
            },
            {
                name: 'champion',
                image: '/ranks/rl/rl-champion.png'
            },
            {
                name: 'grandchampion',
                image: '/ranks/rl/rl-grandchampion.png'
            },
            {
                name: 'ssl',
                image: '/ranks/rl/rl-ssl.png'
            }
        ],
        imageSizeMultiplierHeight: 1,
        imageSizeMultiplierWidth: 1
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