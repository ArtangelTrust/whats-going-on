import React, { createRef, useRef } from "react";
import { PrismicRichText } from "@prismicio/react";
import ScrollContainer from "react-indiana-drag-scroll";

import { useTheme } from "lib";

import styles from "./index.module.css";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialBlockSlice} TestimonialBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialBlockSlice>} TestimonialBlockProps
 * @param { TestimonialBlockProps }
 */

const TestimonialBlock = ({ slice }) => {
  // Workaround to correct text colour against highlight background
  const { currentTheme } = useTheme();

  const elementsRef = useRef(slice.items.map(() => createRef()));

  const clickHandler = (index) => {
    elementsRef.current[index].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  console.log(elementsRef);

  return (
    <section className={styles["testimonial-block"]}>
      <>
        <ScrollContainer className={styles["scroll-container"]}>
          {slice.items.map((item, index) => (
            <div
              key={index}
              className={`${styles.testimonial} ${styles[currentTheme]}`}
              ref={elementsRef.current[index]}
            >
              {item.text && <PrismicRichText field={item.text} />}
              {item.name && <p className={styles.name}>{item.name}</p>}
            </div>
          ))}
        </ScrollContainer>
        <div className={styles.buttons}>
          {slice.items.map((_, index) => (
            <button key={index} onClick={() => clickHandler(index)} />
          ))}
        </div>
      </>
    </section>
  );
};

export default TestimonialBlock;
