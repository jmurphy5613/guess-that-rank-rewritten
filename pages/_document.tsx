import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>GuessThatRank</title>
        <meta name="description" content="GuessThatRank is a game where you guess the rank a player based off of their gameplay. Choose between different title and earn points as you go. Login to upload your own clips and see what the world thinks your rank is" />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
