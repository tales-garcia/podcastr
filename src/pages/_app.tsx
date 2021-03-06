import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import Player from "../components/Player";
import { PlayerProvider } from "../contexts/player";
import GlobalStyle from "../styles/global";

const theme = {
  white: '#FFF',

  gray50: '#F7F8FA',
  gray100: '#E6E8EB',
  gray200: '#AFB2B1',
  gray500: '#808080',
  gray800: '#494D4B',

  green500: '#04D361',

  purple300: '#9F75FF',
  purple400: '#9164FA',
  purple500: '#8257E5',
  purple800: '#6F48C9'
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Podcastr</title>
      </Head>
      <GlobalStyle />
      <PlayerProvider>
        <div style={{display: 'flex'}}>
          <main style={{flex: 1}}>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </div>
      </PlayerProvider>
    </ThemeProvider>
  )
}
