import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={{}}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
