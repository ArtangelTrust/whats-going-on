import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import cn from 'classnames'

import { Accordion } from 'components'

import styles from "./index.module.css"
import Link from 'next/link'

/**
 * @typedef {import("@prismicio/client").Content.ResourceBlockSlice} ResourceBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ResourceBlockSlice>} ResourceBlockProps
 * @param { ResourceBlockProps }
 */
const ResourceBlock = ({ slice }) => (
  <section className={styles["resource-block"]}>
    <Accordion collapsible={slice.primary.collapsible} title={slice.primary.title}>
      {slice.primary.description && 
        <div className={styles.description}>
          <PrismicRichText 
            className={styles.description}
            field={slice.primary.description}   
          />
        </div>
      }
      <div className={styles.resources}>
       {slice.items.map((item, index) => (
          <Link
            key={index}
            href={item.resource.url || "/"}
            className={styles['resource-link']}
          >
            <span>{item.type}</span>
            <div>
              <p className={styles['resource-title']}>{item.title}</p>
              <div className={styles['resource-meta']}>
                <p>{item.description}</p>
                <p>{item.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Accordion>
  </section>
)

export default ResourceBlock