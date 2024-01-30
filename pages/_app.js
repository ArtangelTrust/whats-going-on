import Link from "next/link";
import Script from "next/script";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { CookiesProvider } from "react-cookie";
import { linkResolver, repositoryName } from "prismicio";

import { MenuProvider, ThemeProvider } from 'lib';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>{children}</a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <CookiesProvider defaultSetOptions={{ path: '/' }}>
            <MenuProvider>
              <ThemeProvider>
                {getLayout(<Component {...pageProps} />)}
              </ThemeProvider>
            </MenuProvider>
          </CookiesProvider>
        </PrismicPreview>
      </PrismicProvider>
      <Script
        id="google-tag-manager" 
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-V64Z5SPNX7"
        strategy="afterInteractive" 
      />
      <Script 
        id="gtag-config" 
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V64Z5SPNX7');
        `}
      </Script>
    </>
  )
}
