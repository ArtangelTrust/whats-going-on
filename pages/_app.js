import { MenuProvider, ThemeProvider } from 'lib';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <MenuProvider>
      <ThemeProvider>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </MenuProvider>
  )
}
