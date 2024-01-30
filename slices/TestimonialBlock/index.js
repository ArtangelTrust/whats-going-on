import React, { createRef, useRef, useState, useEffect } from "react";
import { PrismicRichText } from "@prismicio/react";
import ScrollContainer from "react-indiana-drag-scroll";

import { useTheme } from "lib";

import styles from "./index.module.css";
import { ArrowRight } from "components";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialBlockSlice} TestimonialBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialBlockSlice>} TestimonialBlockProps
 * @param { TestimonialBlockProps }
 */

const usePrevious = (state) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = state;
  }, [state]);
  return ref.current;
}

const TestimonialBlock = ({ slice }) => {
  // Workaround to correct text colour against highlight background
  const { currentTheme } = useTheme();

  const elementsRef = useRef(slice.items.map(() => createRef()));

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const prevIndex = usePrevious(currentTestimonialIndex);
  
  const handlePreviousTestiominal = () => {
    if(currentTestimonialIndex <= 0) return;
    setCurrentTestimonialIndex(currentTestimonialIndex - 1)
  }

  const handleNextTestiominal = () => {
    if(currentTestimonialIndex >= slice.items.length - 1) return;
    setCurrentTestimonialIndex(currentTestimonialIndex + 1)
  }

  useEffect(() => {
    if((prevIndex !== undefined) && (prevIndex !== currentTestimonialIndex)) {
      elementsRef?.current[currentTestimonialIndex]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentTestimonialIndex])

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
              {item.name && <div className={styles.name}><PrismicRichText field={item.name} /></div>}
            </div>
          ))}
        </ScrollContainer>
        <div className="flex items-center justify-center space-x-40 mt-8">
          <button onClick={() => handlePreviousTestiominal()}>
            <ArrowRight
              className="rotate-180 h-6 cursor-pointer"
            />
          </button>
          <button onClick={() => handleNextTestiominal()}>
            <ArrowRight
              className="h-6 cursor-pointer"
            />
          </button>
        </div>
      </>
    </section>
  );
};

export default TestimonialBlock;
