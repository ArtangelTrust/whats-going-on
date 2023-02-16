import React from "react";
import { PrismicRichText } from "@prismicio/react";

import { Accordion } from "components";

import styles from "./index.module.css";

/**
 * @typedef {import("@prismicio/client").Content.TextBlockSlice} TextBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBlockSlice>} TextBlockProps
 * @param { TextBlockProps }
 */

const TextBlock = ({ slice }) => (
  <section className={styles["text-block"]}>
    <Accordion
      collapsible={slice.primary.collapsible}
      title={slice.primary.title}
    >
      <div className={styles.text}>
        {slice.items.map((item, index) => (
          <PrismicRichText key={index} field={item.text} />
        ))}
      </div>
    </Accordion>
  </section>
);

export default TextBlock;
