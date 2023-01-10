import Head from "next/head";

import { AccessibilityPanel, Footer } from "components";

import styles from "./BaseLayout.module.css";

export default function BaseLayout({ children }) {
  return (
    <div className={styles.base}>
      <Head>
        <title>What's Going On?</title>
        <meta
          name="description"
          content="What's Going On?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen pb-12">
        {children}
      </div>
      <AccessibilityPanel />
      <Footer />
    </div>
  );
}
