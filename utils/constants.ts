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