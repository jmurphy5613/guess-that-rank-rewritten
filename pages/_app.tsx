import { SessionProvider } from "next-auth/react"
import "../styles/globals.css"

import type { AppProps } from "next/app"
import type { Session } from "next-auth"

import { ConvexProvider, ConvexReactClient } from "convex/react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import ReactGA from "react-ga4";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {

  const router = useRouter()
  useEffect(() => {
    console.log("things happening")
    ReactGA.initialize("G-PGFVE659LJ");
    const handleRouteChange = (url: string) => {
      ReactGA.send({ hitType: "pageview", page: url, title: `hit ${url}` });
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <ConvexProvider client={convex}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ConvexProvider>

  )
}