import Head from "next/head";

import { useMenu, useTheme } from "lib";
import { AccessibilityPanel, Footer, Menu } from "components";

import styles from "./BaseLayout.module.css";

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
      <Footer />
    </div>
  );
}
