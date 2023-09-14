import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    clips: defineTable({
        game: v.string(),
        rank: v.string(),
        link: v.string(),
        nameCredit: v.string(),
        username: v.string()
    }),
})