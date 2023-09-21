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

export const getGuessNumber = query({
    args: {
        userId: v.id("users"),
        game: v.string()
    },
    handler: async (ctx, args) => {
        const applicableGuesses = await ctx.db.query("guesses").filter((item) => item.eq(item.field("userId"), args.userId) && item.eq(item.field("game"), args.game)).collect()
        return applicableGuesses.length + 1
    },
})