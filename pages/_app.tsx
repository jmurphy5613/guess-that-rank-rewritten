import { SessionProvider } from "next-auth/react"
import "../styles/globals.css"

import type { AppProps } from "next/app"
import type { Session } from "next-auth"

import { ConvexProvider, ConvexReactClient } from "convex/react"

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <ConvexProvider client={convex}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ConvexProvider>
  )
}