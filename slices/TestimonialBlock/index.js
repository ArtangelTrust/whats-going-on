import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import ScrollContainer from 'react-indiana-drag-scroll'

import styles from "./index.module.css"

/**
 * @typedef {import("@prismicio/client").Content.TestimonialBlockSlice} TestimonialBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialBlockSlice>} TestimonialBlockProps
 * @param { TestimonialBlockProps }
 */

const TestimonialBlock = ({ slice }) => (
  <section className={styles['testimonial-block']}>
    <ScrollContainer className={styles['scroll-container']}>
      {slice.items.map((item, index) => (
        <div key={index} className={styles.testimonial}>
          {item.text &&
            <PrismicRichText field={item.text}/>
          }
          {item.name && 
            <p className={styles.name}>{item.name}</p>
          }
        </div>
      ))}
    </ScrollContainer>
  </section>
)

export default TestimonialBlock