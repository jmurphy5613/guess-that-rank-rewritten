import { gameRanks } from "./constants"
import { ReactSelectType } from "./types"
import GithubIcon from "@/components/icons/companies/Github"
import GoogleIcon from "@/components/icons/companies/Google"

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

export const emailToUsername = (email: string) => {
    const split = email.split('@')
    return split[0]
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
        //medal.tv/clip/1sFeKyxf53xfWB/vpDJQpGH3?invite=cr-MSw2M0ksLA
        //medal.tv/clips/1sFeKyxf53xfWB/vpDJQpGH3?invite=cr-MSw2M0ksLA
        //find the word clips and replace it with clip
        const characterIndex = link.indexOf('clips')
        const newLink = link.substring(0, characterIndex) + 'clip' + link.substring(characterIndex + 5)
        return newLink
    }
}

export const getCompanyIconFromId = (id: string) => {
    if(id.toLocaleLowerCase().includes('google')) {
        return (<GoogleIcon stroke="#fff" />)
    }
    if(id.toLocaleLowerCase().includes('github')) {
        return (<GithubIcon stroke="#626262" />)
    }
}