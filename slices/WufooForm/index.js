import React, { useRef } from 'react'
import { PrismicRichText } from '@prismicio/react'

import Wufoo from './WufooForm'

import styles from "./index.module.css"

/**
 * @typedef {import("@prismicio/client").Content.WufooFormSlice} WufooFormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WufooFormSlice>} WufooFormProps
 * @param { WufooFormProps }
 */

const WufooFormBlock = ({ slice }) => {

  return (
    <section className={styles['wufoo-form']}>
      <Wufoo
        userName={slice.primary.username}
        formHash={slice.primary.formhash}
        className={styles['form']}
        header="hide"
      />
    </section>
  )
}

export default WufooFormBlock