import { v } from "convex/values"
import { internalMutation, mutation, query } from "./_generated/server"
import { seedClipData } from "../utils/constants"
import { Id } from "./_generated/dataModel"

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
        const clips = await ctx.db.query("clips").filter((item) => item.and( item.not(item.field("isApproved")), item.not(item.field("rejected")))).collect()
        return clips[0]
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
        for (const clip of seedClipData) {
            let userId = null;
            //check if the user already exists in the database
            const user = await ctx.db.query("users").filter((item) => item.eq(item.field("username"), clip.name)).first()
            if (user) {
                userId = user._id
            } else {
                userId = await ctx.db.insert("users", { username: clip.name, email: `${clip.name}@gmail.com` })
            }
            const existingClip = await ctx.db.query("clips").filter((item) => item.eq(item.field("link"), clip.link)).first()
            if (!existingClip) {
                await ctx.db.insert("clips", { game: clip.game, rank: clip.rank, link: clip.link, userId: userId, isApproved: true, rejected: false })
            }
        }

    }
})

export const getLateststNotGuessedClip = query({
    args: {
        email: v.string(),
        game: v.string(),
    },
    handler: async (ctx, args) => {
        const user = await ctx.db.query("users").filter((item) => item.eq(item.field("email"), args.email)).first()
        const possibleClips = await ctx.db.query("clips").filter((item) => item.eq(item.field("isApproved"), true) && item.neq(item.field("rejected"), true) && item.neq(item.field("userId"), user?._id) && item.eq(item.field("game"), args.game)).collect()
        const guessedClips = await ctx.db.query("guesses").filter((item) => item.eq(item.field("userId"), user?._id) && item.eq(item.field("game"), args.game)).collect()
        const guessedClipIds = guessedClips.map((item) => item.clipId)
        const filteredClips = possibleClips.filter((item) => !guessedClipIds.includes(item._id))
        //randomize the order of the clips
        for (let i = filteredClips.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = filteredClips[i]
            filteredClips[i] = filteredClips[j]
            filteredClips[j] = temp
        }
        return filteredClips
    }
})

export const getLastestNotGuessedClipGuest = query({
    args: {
        alreadyGuessedClips: v.array(v.id("clips")),
        game: v.string(),
    },
    handler: async (ctx, args) => {
        const possibleClips = await ctx.db.query("clips").filter((item) => item.eq(item.field("isApproved"), true) && item.neq(item.field("rejected"), true) && item.eq(item.field("game"), args.game)).collect()
        const filteredClips = possibleClips.filter((item) => !args.alreadyGuessedClips.includes(item._id))
        //randomize the order of the clips
        for (let i = filteredClips.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = filteredClips[i]
            filteredClips[i] = filteredClips[j]
            filteredClips[j] = temp
        }
        return filteredClips
    }
})