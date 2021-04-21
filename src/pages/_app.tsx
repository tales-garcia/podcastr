import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{}}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
