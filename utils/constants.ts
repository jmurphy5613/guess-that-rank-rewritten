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
                name: 'le',
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
                name: 'diamond',
                image: '/ranks/league/league-diamond.png'
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
    },
    {
        "game": "league",
        "rank": "platinum",
        "link": "https://www.youtube.com/embed/DDJgsSg5Cf8?si=DyGWtVY75YjP0J9R",
        "isApproved": false,
        "rejected": false,
        "name": "BennyG"
    },
    {
        "game": "league",
        "rank": "diamond",
        "link": "https://www.youtube.com/embed/k5pRN_Napds?si=Iq4qHGPFapv6BfGY",
        "isApproved": false,
        "rejected": false,
        "name": "Digitalnavy_THF"
    },
    {
        "game": "league",
        "rank": "bronze",
        "link": "https://www.youtube.com/embed/rQ4-6k36JRw?si=qzXIXse2Mp-5Rlnm",
        "isApproved": false,
        "rejected": false,
        "name": "Jhay"
    },
    {
        "game": "league",
        "rank": "iron",
        "link": "https://www.youtube.com/embed/u64lycvFzKs?si=PRzE0MTw3SqGIYPx",
        "isApproved": false,
        "rejected": false,
        "name": "ssijpento18"
    },
    {
        "game": "league",
        "rank": "gold",
        "link": "https://www.youtube.com/embed/2G_QfePfeR4?si=suFRRes-UlPcGF9C",
        "isApproved": false,
        "rejected": false,
        "name": "SlimOpz"
    },
    {
        "game": "league",
        "rank": "gold",
        "link": "https://www.youtube.com/embed/-bxyeCiufD8?si=-qGl7U8ROvk6SzzM",
        "isApproved": false,
        "rejected": false,
        "name": "Furanshisuo"
    },
    {
        "game": "league",
        "rank": "platinum",
        "link": "https://www.youtube.com/embed/2q7SDiEoYaU?si=7_m1egwb8pb6BUbW",
        "isApproved": false,
        "rejected": false,
        "name": "MrDawn"
    },
    {
        "game": "league",
        "rank": "gold",
        "link": "https://www.youtube.com/embed/ZKG1TELzdtI?si=HNxpu7yl0w6O3IkO",
        "isApproved": false,
        "rejected": false,
        "name": "janbon"
    },
    {
        "game": "league",
        "rank": "gold",
        "link": "https://www.youtube.com/embed/00K0gFNl4KU",
        "isApproved": false,
        "isRejected": false,
        "name": "TTV Katskawaii"
    },
    {
        "game": "league",
        "rank": "bronze",
        "link": "https://www.youtube.com/embed/Hdtgl9PvFxw",
        "isApproved": false,
        "isRejected": false,
        "name": "ItsMeBananeq"
    },
    {
        "game": "league",
        "rank": "iron",
        "link": "https://www.youtube.com/embed/F7EfbUyw9yo",
        "isApproved": false,
        "isRejected": false,
        "name": "wild slapper"
    },
    {
        "game": "league",
        "rank": "platinum",
        "link": "https://www.youtube.com/embed/zD6N8q-bLy4",
        "isApproved": false,
        "isRejected": false,
        "name": "ket"
    },
    {
        "game": "league",
        "rank": "iron",
        "link": "https://www.youtube.com/embed/XFY0aomGB2s",
        "isApproved": false,
        "isRejected": false,
        "name": "UmerGamerZ"
    },
    {
        "game": "league",
        "rank": "gold",
        "link": "https://www.youtube.com/embed/ct4o8ovaZl4",
        "isApproved": false,
        "isRejected": false,
        "name": "xGejX"
    },
    {
        "game": "league",
        "rank": "silver",
        "link": "https://www.youtube.com/embed/BDW3MId53gE",
        "isApproved": false,
        "isRejected": false,
        "name": "Guga2370"
    },
    {
        "game": "league",
        "rank": "silver",
        "link": "https://www.youtube.com/embed/MIXwV5cJQt8",
        "isApproved": false,
        "isRejected": false,
        "name": "Nitrovinzleo"
    },
    {
        "game": "league",
        "rank": "gold",
        "link": "https://www.youtube.com/embed/cMcBnTcON-A",
        "isApproved": false,
        "isRejected": false,
        "name": "Mat3som"
    },
    {
        "game": "league",
        "rank": "gold",
        "link": "https://www.youtube.com/embed/VHITy609uFQ",
        "isApproved": false,
        "isRejected": false,
        "name": "ZXY"
    },
    {
        "game": "league",
        "rank": "bronze",
        "link": "https://www.youtube.com/embed/l9hUzk9klNk",
        "isApproved": false,
        "isRejected": false,
        "name": "MatejRKOGod"
    },
    {
        "game": "league",
        "rank": "gold",
        "link": "https://www.youtube.com/embed/2x13sW1pU4o",
        "isApproved": false,
        "isRejected": false,
        "name": "Rμne"
    },
    {
        "game": "league",
        "rank": "gold",
        "link": "https://www.youtube.com/embed/R9fwlHozD2Y",
        "isApproved": false,
        "isRejected": false,
        "name": "Mistar"
    },
    {
        "game": "league",
        "rank": "diamond",
        "link": "https://www.youtube.com/embed/_ZQkZd5iySE",
        "isApproved": false,
        "isRejected": false,
        "name": "Witzler"
    },
    {
        "game": "league",
        "rank": "gold",
        "link": "https://www.youtube.com/embed/q5IGsqHJxlk",
        "isApproved": false,
        "isRejected": false,
        "name": "CWL Tkowalski"
    },
    {
        "game": "rl",
        "rank": "grandchampion",
        "link": "https://www.youtube.com/embed/nptOre1zWNg",
        "isApproved": false,
        "isRejected": false,
        "name": "Azelios"
    },
    {
        "game": "rl",
        "rank": "grandchampion",
        "link": "https://www.youtube.com/embed/RbLrhydsK1Q",
        "isApproved": false,
        "isRejected": false,
        "name": "Damoloss"
    },
    {
        "game": "rl",
        "rank": "champion",
        "link": "https://www.youtube.com/embed/Px77OFGFX9I",
        "isApproved": false,
        "isRejected": false,
        "name": "aquizzkamii"
    },
    {
        "game": "rl",
        "rank": "platinum",
        "link": "https://www.youtube.com/embed/_qflEj3kQpA",
        "isApproved": false,
        "isRejected": false,
        "name": "pajaczek"
    },
    {
        "game": "rl",
        "rank": "platinum",
        "link": "https://www.youtube.com/embed/MT5AkdnoDLA",
        "isApproved": false,
        "isRejected": false,
        "name": "Kauan07ICE"
    },
    {
        "game": "rl",
        "rank": "champion",
        "link": "https://www.youtube.com/embed/C-Ft7DalqYM",
        "isApproved": false,
        "isRejected": false,
        "name": "zixey"
    },
    {
        "game": "rl",
        "rank": "platinum",
        "link": "https://www.youtube.com/embed/Pun6l6f8y5g",
        "isApproved": false,
        "isRejected": false,
        "name": "Smadge_2311"
    },
    {
        "game": "rl",
        "rank": "diamond",
        "link": "https://www.youtube.com/embed/S_QUqk080jY",
        "isApproved": false,
        "isRejected": false,
        "name": "Hfihfehgbfuiweag"
    },
    {
        "game": "rl",
        "rank": "grandchampion",
        "link": "https://www.youtube.com/embed/uzgxXbALGDU",
        "isApproved": false,
        "isRejected": false,
        "name": "pantherxh"
    },
    {
        "game": "rl",
        "rank": "diamond",
        "link": "https://www.youtube.com/embed/G7MEKKgzV_I",
        "isApproved": false,
        "isRejected": false,
        "name": "Telmo"
    },
    {
        "game": "rl",
        "rank": "diamond",
        "link": "https://www.youtube.com/embed/y4RfD7s2B00",
        "isApproved": false,
        "isRejected": false,
        "name": "MalignoSx"
    },
    {
        "game": "rl",
        "rank": "grandchampion",
        "link": "https://www.youtube.com/embed/SDhemLZyNPc",
        "isApproved": false,
        "isRejected": false,
        "name": "Néo-Bronze"
    },
    {
        "game": "rl",
        "rank": "diamond",
        "link": "https://www.youtube.com/embed/x16jpqTgQAY",
        "isApproved": false,
        "isRejected": false,
        "name": "Tearix"
    },
    {
        "game": "rl",
        "rank": "diamond",
        "link": "https://www.youtube.com/embed/1UTgPn6TYm8",
        "isApproved": false,
        "isRejected": false,
        "name": "Xtality_RL"
    },
    {
        "game": "rl",
        "rank": "diamond",
        "link": "https://www.youtube.com/embed/TXdXQXZZZ4w",
        "isApproved": false,
        "isRejected": false,
        "name": "AraZeni"
    },
    {
        "game": "csgo",
        "rank": "guardian",
        "link": "https://www.youtube.com/embed/KVJDAhyS5Js",
        "isApproved": false,
        "isRejected": false,
        "name": "2difficult"
    },
    {
        "game": "csgo",
        "rank": "supreme",
        "link": "https://www.youtube.com/embed/0U4aOHTQ4KI",
        "isApproved": false,
        "isRejected": false,
        "name": "Sad"
    },
    {
        "game": "csgo",
        "rank": "guardian",
        "link": "https://www.youtube.com/embed/wCrMf5pCd-0",
        "isApproved": false,
        "isRejected": false,
        "name": "kerevizodunu2000"
    },
    {
        "game": "csgo",
        "rank": "dmg",
        "link": "https://www.youtube.com/embed/WZc26J93ccc",
        "isApproved": false,
        "isRejected": false,
        "name": "hank"
    },
    {
        "game": "csgo",
        "rank": "lem",
        "link": "https://www.youtube.com/embed/gIuT2EBQSmI",
        "isApproved": false,
        "isRejected": false,
        "name": "Xi Wu"
    },
    {
        "game": "csgo",
        "rank": "supreme",
        "link": "https://www.youtube.com/embed/p2gmNrTvKG8",
        "isApproved": false,
        "isRejected": false,
        "name": "isiah"
    },
    {
        "game": "csgo",
        "rank": "guardian",
        "link": "https://www.youtube.com/embed/_HlzuKp21e0",
        "isApproved": false,
        "isRejected": false,
        "name": "Shabab Clampimpong Clonsos"
    },
    {
        "game": "csgo",
        "rank": "nova",
        "link": "https://www.youtube.com/embed/CTOSKITHHJA",
        "isApproved": false,
        "isRejected": false,
        "name": "LyNuts"
    },
    {
        "game": "csgo",
        "rank": "silver",
        "link": "https://www.youtube.com/embed/ChurBGgOO0g",
        "isApproved": false,
        "isRejected": false,
        "name": "relvojtax"
    },
    {
        "game": "csgo",
        "rank": "nova",
        "link": "https://www.youtube.com/embed/VpztPmgwFAc",
        "isApproved": false,
        "isRejected": false,
        "name": "HuGo"
    },
    {
        "game": "csgo",
        "rank": "dmg",
        "link": "https://www.youtube.com/embed/q0Rtj-i5bec",
        "isApproved": false,
        "isRejected": false,
        "name": "chooseimage"
    },
    {
        "game": "csgo",
        "rank": "nova",
        "link": "https://www.youtube.com/embed/9S5D22Va90o",
        "isApproved": false,
        "isRejected": false,
        "name": "WuiHa"
    },
    {
        "game": "csgo",
        "rank": "guardian",
        "link": "https://www.youtube.com/embed/2SuP09dnagg",
        "isApproved": false,
        "isRejected": false,
        "name": "Ray"
    },
    {
        "game": "csgo",
        "rank": "lem",
        "link": "https://www.youtube.com/embed/Yf21l_bJXL4",
        "isApproved": false,
        "isRejected": false,
        "name": "Insolent Devil"
    },
    {
        "game": "csgo",
        "rank": "guardian",
        "link": "https://www.youtube.com/embed/AsrdpTRqpkw",
        "isApproved": false,
        "isRejected": false,
        "name": "Cuadro"
    }
]