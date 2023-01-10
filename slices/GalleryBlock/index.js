import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'

import { linkResolver } from 'prismicio'
import { Accordion } from 'components'

import styles from "./index.module.css"
import Link from 'next/link'

/**
 * @typedef {import("@prismicio/client").Content.GallerySlice} GallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GallerySlice>} GalleryProps
 * @param { GalleryProps }
 */

const Gallery = ({ slice }) => (
  <section className={styles['gallery-block']}>
    <Accordion collapsible={slice.primary.collapsible} title={slice.primary.title}>
      <div className={styles.gallery}>
        {slice.items.map((item, index) => (
          <Link href={linkResolver(item.internal_link)} key={index}>
            <figure>
              <Image
                src={item.image.url} 
                alt={item.image.alt} 
                width={item.image.dimensions.width}
                height={item.image.dimensions.height}
              />
              <figcaption>
                <h2>{item.title}</h2>
                <PrismicRichText field={item.description}/>
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </Accordion>
  </section>
)

export default Gallery