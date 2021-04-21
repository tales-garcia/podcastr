import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={{}}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
