import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    clips: defineTable({
        game: v.string(),
        rank: v.string(),
        link: v.string(),
        isApproved: v.boolean(),
        rejected: v.boolean(),
        userId: v.id("users"),
    }),
    users: defineTable({
        username: v.string(),
        email: v.string(),
    }),
    guesses: defineTable({
        clipId: v.id("clips"),
        userId: v.id("users"),
        game: v.string(),
        rankGuessed: v.string(),
        correctRank: v.string(),
        isCorrect: v.boolean(),
    }),
})