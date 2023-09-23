import { Guess } from "./types"

export const createLocalGuess = (clipId: string, guessedRank: string, correctRank: string, game: string) => {
    const guesses = JSON.parse(localStorage.getItem("guesses") || "[]") as Guess[]
    const newGuess: Guess = {
        clipId: clipId,
        game: game,
        rankGuessed: guessedRank,
        correctRank: correctRank
    }
    guesses.push(newGuess)
    localStorage.setItem("guesses", JSON.stringify(guesses))
}

export const getLocalGuessedClipIds = (game: string) => {
    const guesses = JSON.parse(localStorage.getItem("guesses") || "[]") as Guess[]
    const guessedClipIds = guesses.filter((guess) => guess.game === game).map((guess) => guess.clipId)
    return guessedClipIds
}

export const getLocalGuessStats = (game: string) => {
    const guesses = JSON.parse(localStorage.getItem("guesses") || "[]") as Guess[]
    let overallPoints = 0
    let gamePoints = 0
    let currentGameGuesses = 0
    for (const guess of guesses) {
        if (guess.correctRank === guess.rankGuessed) {
            overallPoints += 1
            if (guess.game === game) gamePoints += 1
        }
        if (guess.game === game) currentGameGuesses += 1
    }
    return { overallPoints: overallPoints, gamePoints: gamePoints, currentGameGuessNumber: currentGameGuesses + 1 }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

