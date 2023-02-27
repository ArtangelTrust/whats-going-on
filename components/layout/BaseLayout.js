import Head from "next/head";

import { useMenu, useTheme } from "lib";
import { AccessibilityPanel, Footer, Menu } from "components";

import styles from "./BaseLayout.module.css";
import CookieConsent from "react-cookie-consent";

export default function BaseLayout({ children }) {
  const { showMenu } =  useMenu();
  const { currentTheme } = useTheme();
  return (
    <div className={`${styles.base} ${currentTheme}`}>
      <Head>
        <title>What&apos;s Going On?</title>
        <meta
          name="description"
          content="Five films exploring the experience of psychosis are available to stream for free as an educational resource in judicial, medical and psychiatric settings."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <a className={styles['skip-navigation-link']} href="#main-content">
        Skip Navigation
      </a>
      {showMenu ? 
        (
          <Menu />
        )
      :
        (
          <div className="min-h-screen pb-12">
            {children}
          </div>
        )
      }
      <AccessibilityPanel />
      <CookieConsent 
        disableStyles
        enableDeclineButton
        declineButtonText="Read More"
        onDecline={() => {
          window.location.href = "https://www.artangel.org.uk/privacy-policy/#websites"
        }}
        containerClasses="py-4 space-y-4 md:space-y-0 px-4 bottom-0 items-baseline bg-black text-white flex flex-wrap justify-between left-0 fixed w-full z-[999]"
        buttonClasses="bg-highlight rounded-none shadow-none text-black cursor-pointer md:mx-4 px-2 py-1"
        declineButtonClasses="bg-white text-black rounded-none shadow-none cursor-pointer mr-4 md:mx-4 px-2 py-1"
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Footer />
    </div>
  );
}
