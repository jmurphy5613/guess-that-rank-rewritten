import { v } from "convex/values"
import { internalMutation, mutation, query } from "./_generated/server"

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
        isApproved: v.boolean(),
        rejected: v.boolean(),
        userId: v.id("users"),
    },
    handler: async (ctx, args) => {
        const clip = { game: args.game, rank: args.rank, link: args.link, userId: args.userId, isApproved: args.isApproved, rejected: args.rejected }
        const clipId = await ctx.db.insert("clips", clip)
        return clipId
    }
})

export const getLatestNotApprovedClip = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("clips").filter((item) => item.eq(item.field("isApproved"), false) && item.neq(item.field("rejected"), true)).first()
    }
})

export const rejectClip = mutation({
    args: {
        clipId: v.id("clips"),
    },
    handler: async (ctx, args) => {
        const clip = await ctx.db.query("clips").filter((item) => item.eq(item.field("_id"), args.clipId)).first()
        if (clip) {
            await ctx.db.replace(args.clipId, { game: clip.game, rank: clip.rank, link: clip.link, userId: clip.userId, isApproved: clip.isApproved, rejected: true })
        }
    }
})

export const approveClip = mutation({
    args: {
        clipId: v.id("clips"),
        actualLink: v.string(),
    },
    handler: async (ctx, args) => {
        const clip = await ctx.db.query("clips").filter((item) => item.eq(item.field("_id"), args.clipId)).first()
        if (clip) {
            await ctx.db.replace(args.clipId, { game: clip.game, rank: clip.rank, link: args.actualLink, userId: clip.userId, isApproved: true, rejected: clip.rejected })
        }
    }
})

export const seedData = internalMutation({
    args: {},
    handler: async (ctx) => {
        const userId = await ctx.db.insert("users", { username: "test", email: "", clips: [] })
        await ctx.db.insert("clips", { game: "test", rank: "test", link: "test", userId: userId, isApproved: true, rejected: false })
    }
})