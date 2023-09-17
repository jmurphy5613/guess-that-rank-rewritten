import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import { ConvexHttpClient, BaseConvexClient } from "convex/browser";
import { api } from '@/convex/_generated/api'

export const authOptions: NextAuthOptions = {
    // https://next-auth.js.org/configuration/providers/oauth
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET!,
    pages: {
        signIn: '/auth/signin',
    },
    callbacks: {
        async signIn({ user }) {
            if(user && user.email && user.name) {
                const httpClient = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
                httpClient.query(api.users.getUserByUsername, { email: user.email }).then((currentUser) => {
                    if(!currentUser) {
                        httpClient.mutation(api.users.createUser, { username: user.name!, email: user.email! })
                    }
                });
            }
            return true
        }
    }
}

export default NextAuth(authOptions)