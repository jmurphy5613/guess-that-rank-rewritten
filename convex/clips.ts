import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

export const getAll = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("clips").collect()
    }
})

export const createClip = mutation({
    args: {
        game: v.string(),
        rank: v.string(),
        link: v.string(),
        nameCredit: v.string(),
        username: v.string(),
        isApproved: v.boolean()
    },
    handler: async (ctx, args) => {
        const clip = { game: args.game, rank: args.rank, link: args.link, nameCredit: args.nameCredit, username: args.username, isApproved: args.isApproved }
        const clipId = await ctx.db.insert("clips", clip)
        return clipId
    }
})