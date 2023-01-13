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

const LinkGuard = ({href, children}) => {
  return href ? <Link href={href}>{children}</Link> : children
}

const Gallery = ({ slice }) => (
  <section className={styles['gallery-block']}>
    <Accordion collapsible={slice.primary.collapsible} title={slice.primary.title}>
      <div className={styles.gallery}>
        {slice.items.map((item, index) => (
          <LinkGuard href={linkResolver(item.internal_link)} key={index}>
            <figure>
              {item.image?.url &&
                <Image
                  src={item.image.url} 
                  alt={item.image.alt} 
                  width={item.image.dimensions.width}
                  height={item.image.dimensions.height}
                />
              }
              <figcaption>
                {item.title && <h2>{item.title}</h2>}
                {item.description && <PrismicRichText field={item.description}/>}
              </figcaption>
            </figure>
          </LinkGuard>
          // <></>
        ))}
      </div>
    </Accordion>
  </section>
)

export default Gallery