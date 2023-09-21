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

export const getLocalGuessNumber = (game: string) => {
    const guesses = JSON.parse(localStorage.getItem("guesses") || "[]") as Guess[]
    const applicableGuesses = guesses.filter((guess) => guess.game === game)
    return applicableGuesses.length + 1
}