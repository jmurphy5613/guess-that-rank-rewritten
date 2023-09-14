import { gameRanks } from "./constants"
import { ReactSelectType } from "./types"

export const createSelectArray = (game: string) => {
    const ranks = gameRanks[game].ranks
    const selectValues: ReactSelectType[] = []
    for (const rank of ranks) {
        let rankName = rank.name
        const firstLetter = rankName.charAt(0).toUpperCase()
        rankName = firstLetter + rankName.slice(1)
        selectValues.push({ label: rankName, value: rank.name })
    }

    return selectValues
}

export const getMP4FromLink = (link: string) => {
    if(link.includes('twitch')) {
        const split = link.split('/')
        const clipId = split[split.length - 1]
        return `https://clips.twitch.tv/embed?clip=${clipId}=streamernews.example.com&parent=embed.example.com`
    } else if(link.includes('youtube')) {
        const split = link.split('/')
        const videoIdWithChannel = split[split.length - 1]
        const videoId = videoIdWithChannel.split('&')[0]
        return `https://www.youtube.com/embed/${videoId}`
    } else if(link.includes('medal')) {

    }
}