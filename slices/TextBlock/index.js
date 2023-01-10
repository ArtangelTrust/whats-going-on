import React from 'react'
import { PrismicRichText } from '@prismicio/react'

import styles from "./index.module.css"

/**
 * @typedef {import("@prismicio/client").Content.TextBlockSlice} TextBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBlockSlice>} TextBlockProps
 * @param { TextBlockProps }
 */

const TextBlock = ({ slice }) => (
  <section className={styles['text-block']}>
    <PrismicRichText field={slice.primary.text}/>
  </section>
)

export default TextBlock