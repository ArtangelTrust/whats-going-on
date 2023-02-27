import React, { useEffect, useState } from "react";

import styles from "./index.module.css";

/**
 * @typedef {import("@prismicio/client").Content.WufooFormSlice} WufooFormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WufooFormSlice>} WufooFormProps
 * @param { WufooFormProps }
 */

const WufooFormBlock = ({ slice }) => {

  return (
    slice.primary?.embed_code[0]?.text && (
      <section className={styles["wufoo-form"]}>
        <div
          dangerouslySetInnerHTML={{ __html: slice.primary.embed_code[0].text }}
        />
      </section>
    )
  );
};

export default WufooFormBlock;
