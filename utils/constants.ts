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
                name: 'ascendant',
                image: '/ranks/valorant/valorant-ascendant.png'
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
    },
    {
        value: 'league',
        label: 'League of Legends'
    },
    {
        value: 'rl',
        label: 'Rocket League'
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
        borderRadius: '1rem',
        color: '#626262',
    }),
    singleValue: (provided: any, state: any) => ({
        ...provided,
        color: "#fff"
    })

}

export const seedClipData = [
    {
        "game": "valorant",
        "rank": "diamond",
        "link": "https://medal.tv/games/valorant/clip/48DYfcJ3apGhN/d1337WhvKtrP",
        "isApproved": false,
        "rejected": false,
        "name": "ludacris"
    },
    {
        "game": "valorant",
        "rank": "gold",
        "link": "https://medal.tv/games/valorant/clip/s2Dl4JPFebhO3",
        "isApproved": false,
        "rejected": false,
        "name": "ChinTangWang"
    },
    {
        "game": "valorant",
        "rank": "diamond",
        "link": "https://medal.tv/games/valorant/clip/q5X5Ieq5MJDVw/d13374quFARF",
        "isApproved": false,
        "rejected": false,
        "name": "Soul"
    },
    {
        "game": "valorant",
        "rank": "gold",
        "link": "https://medal.tv/games/valorant/clip/a5yCjkqvogUv9/d13376D17r8s",
        "isApproved": false,
        "rejected": false,
        "name": "Pran"
    },
    {
        "game": "valorant",
        "rank": "gold",
        "link": "https://medal.tv/games/valorant/clip/gxyXihE8iKyzF/d1337pafoz9t",
        "name": "Pran",
        "isApproved": false,
        "rejected": false
    },
    {
        "game": "valorant",
        "rank": "ascendant",
        "link": "https://medal.tv/games/valorant/clip/s0SgeNG5cbMzU/abcdefghijkl",
        "isApproved": false,
        "rejected": false,
        "name": "Reconshire"
    },
    {
        "game": "valorant",
        "rank": "immortal",
        "link": "https://medal.tv/games/valorant/clip/se88Haw6gxbr-/abcdefghijkl",
        "isApproved": false,
        "rejected": false,
        "name": "Electives"
    },
    {
        "game": "valorant",
        "rank": "immortal",
        "link": "https://medal.tv/games/valorant/clip/pmK1j2fQZnXjv/abcdefghijkl",
        "isApproved": false,
        "rejected": false,
        "name": "ripbenjii"
    },
    {
        "game": "valorant",
        "rank": "immortal",
        "link": "https://medal.tv/games/valorant/clip/mNZV3vw0IZjVi/KWenIjTL77DP",
        "isApproved": false,
        "rejected": false,
        "name": "Mayynic"
    },
    {
        "game": "valorant",
        "rank": "ascendant",
        "link": "https://medal.tv/games/valorant/clip/rMdcWJYf0ShQP/d1337Ae45grk",
        "isApproved": false,
        "rejected": false,
        "name": "jandro"
    },
    {
        "game": "valorant",
        "rank": "platinum",
        "link": "https://medal.tv/games/valorant/clip/n1MZv3yBeLBap/d1337gJXUuaX",
        "isApproved": false,
        "rejected": false,
        "name": "robertobidartt"
    },
    {
        "game": "valorant",
        "rank": "diamond",
        "link": "https://medal.tv/games/valorant/clip/srADNSRChrqa5/d1337QJA0TQg",
        "isApproved": false,
        "rejected": false,
        "name": "Soul"
    },
    {
        "game": "valorant",
        "rank": "immortal",
        "link": "https://medal.tv/games/valorant/clip/stWftB57FZj1r/d1337lj7GK0z",
        "isApproved": false,
        "rejected": false,
        "name": "tobias.j.kirkham"
    },
    {
        "game": "valorant",
        "rank": "diamond",
        "link": "https://medal.tv/games/valorant/clip/rvdhii-er5VZF/gFycE5uuS",
        "isApproved": false,
        "rejected": false,
        "name": "GigaZippi"
    },
    {
        "game": "valorant",
        "rank": "diamond",
        "link": "https://medal.tv/games/valorant/clip/pYJYVbdZa9-nM/9ox3P8kCo",
        "isApproved": false,
        "rejected": false,
        "name": "GigaZippi"
    },
    {
        "game": "valorant",
        "rank": "immortal",
        "link": "https://medal.tv/games/valorant/clip/tDwNabzc_Kxu-",
        "isApproved": false,
        "rejected": false,
        "name": "whifph"
    },
    {
        "game": "valorant",
        "rank": "radiant",
        "link": "https://medal.tv/games/valorant/clip/rElBjFbVFtqfw/d1337yb1x1U0",
        "isApproved": false,
        "rejected": false,
        "name": "Sen Killua"
    },
    {
        "game": "valorant",
        "rank": "silver",
        "link": "https://medal.tv/games/valorant/clip/rKlOsRuWPutJ1/131ygwt7SH7C",
        "isApproved": false,
        "rejected": false,
        "name": "mommy"
    }
]