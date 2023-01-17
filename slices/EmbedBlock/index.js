import React from 'react'
import Vimeo from '@u-wave/react-vimeo'

import { Accordion } from 'components'

import styles from "./index.module.css"

/**
 * @typedef {import("@prismicio/client").Content.EmbedBlockSlice} EmbedBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EmbedBlockSlice>} EmbedBlockProps
 * @param { EmbedBlockProps }
 */
const EmbedBlock = ({ slice }) => (
  <section className={styles['embed-block']}>
    <Accordion collapsible={slice.primary.collapsible} title={slice.primary.title}>
      <div className={styles['embed-content']}>
        {slice.items.map((item, index) => {
          switch (item.embed_link.provider_name) {
            case "Vimeo":
                return (
                  <Vimeo
                    key={index}
                    video={item.embed_link.embed_url}
                    responsive={true}
                    dnt={true}
                    autoplay={true}
                    muted={true}
                    style={{height: "80%"}}
                  />
                )
            default:
              return (
                <div
                  key={index}
                  data-oembed={item.embed_link.embed_url}
                  data-oembed-type={item.embed_link.type}
                  data-oembed-provider={item.embed_link.provider_name}
                  dangerouslySetInnerHTML={{ __html: item.embed_link.html ?? '' }}
                />
              )
          }
        })}
      </div>
    </Accordion>
  </section>
)

export default EmbedBlock