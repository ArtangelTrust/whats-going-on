import React from 'react'

import styles from "./index.module.css"
import Link from 'next/link'
import { ArrowRight } from 'components'
import { linkResolver } from 'prismicio'

/**
 * @typedef {import("@prismicio/client").Content.MenuSlice} MenuSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MenuSlice>} MenuProps
 * @param { MenuProps }
 */
const Menu = ({ slice }) => (
  <section className={styles['menu-block']}>
    {slice.items.map((item, index) => (
      <Link 
        href={linkResolver(item.link)} 
        key={index}
        className={styles['menu-link']}
      >
        <div className={styles['menu-item']}>
          <p>{item.title}</p>
          <ArrowRight className="flex-shrink-0 w-1/2 " />
        </div>
      </Link>
    ))}
  </section>
)

export default Menu