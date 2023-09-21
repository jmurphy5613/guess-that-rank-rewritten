import { v } from "convex/values"
import { query } from "./_generated/server"
import { mutation } from "./_generated/server"

export const createGuess = mutation({
    args: {
        clipId: v.id("clips"),
        userId: v.id("users"),
        game: v.string(),
        rankGuessed: v.string(),
        correctRank: v.string()
    },
    handler: async (ctx, args) => {
        const guess = { clipId: args.clipId, userId: args.userId, game: args.game, rankGuessed: args.rankGuessed, correctRank: args.correctRank }
        const guessId = await ctx.db.insert("guesses", guess)
        return guessId
    }
})

export const getGuessStats = query({
    args: {
        userId: v.id("users"),
        currentGame: v.string()
    },
    handler: async (ctx, args) => {
        let overallPoints = 0
        let gamePoints = 0
        let currentGameGuesses = 0
        const allGuesses = await ctx.db.query("guesses").filter((item) => item.eq(item.field("userId"), args.userId)).collect()
        for(const guesses of allGuesses) {
            if(guesses.rankGuessed === guesses.correctRank) {
                overallPoints += 1
                if(guesses.game === args.currentGame) {
                    gamePoints += 1
                }
            }
            if(guesses.game === args.currentGame) {
                currentGameGuesses += 1
            }
        }
        return { overallPoints: overallPoints, gamePoints: gamePoints, currentGameGuessNumber: currentGameGuesses+1 }
    },
})