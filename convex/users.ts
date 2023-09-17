import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

export const getAll = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("clips").collect()
    }
})

export const createUser = mutation({
    args: {
        username: v.string(),
        email: v.string(),
    },
    handler: async (ctx, args) => {
        const user = { username: args.username, email: args.email, clips: [] }
        const userId = await ctx.db.insert("users", user)
        return userId
    }
})

export const getUserByUsername = query({
    args: {
        email: v.string()
    },
    handler: async (ctx, args) => {
        return await ctx.db.query("users").filter((item) => item.eq(item.field("email"), args.email)).first()
    }
})


