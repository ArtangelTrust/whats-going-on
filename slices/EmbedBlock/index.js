import React from 'react'
import Vimeo from '@u-wave/react-vimeo'
import { PrismicRichText } from '@prismicio/react'

import { Accordion } from 'components'

import styles from "./index.module.css"
import { useCookies } from 'react-cookie'
import Link from 'next/link'

/**
 * @typedef {import("@prismicio/client").Content.EmbedBlockSlice} EmbedBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EmbedBlockSlice>} EmbedBlockProps
 * @param { EmbedBlockProps }
 */
const EmbedBlock = ({ slice }) => {
  
  const [cookies] = useCookies(['wgo_access']);

  const requiresAccess = slice?.primary?.protected;
  const hasAccess = cookies?.wgo_access;

  return (
    <section className={styles['embed-block']}>
      <Accordion collapsible={slice.primary.collapsible} title={slice.primary.title}>
        <>
          {(requiresAccess && !hasAccess) ? (
            <div className={styles.description}>
              <p>This is a protected resource, please <Link href="/submit-your-interest">submit your interest</Link> to access it.</p>
            </div>
          ) : (
            <>
              {slice.primary.description && (
                <div className={styles.description}>
                  <PrismicRichText field={slice.primary.description}/>
                </div>
              )}
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
                          textTrack="en-uk"
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
            </>
          )}
        </>
      </Accordion>
    </section>
  )
}

export default EmbedBlock