'use client'

import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {

  console.log('Hello')
  return (
    <div className={styles.container}>
      <div>© LittleKenzy. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/image/1.png" alt="Little Kenzy" width={15} height={15} className={styles.icon}/>
        <Image src="/image/2.png" alt="Little Kenzy" width={15} height={15} className={styles.icon}/>
        <Image src="/image/3.png" alt="Little Kenzy" width={15} height={15} className={styles.icon}/>
        <Image src="/image/4.png" alt="Little Kenzy" width={15} height={15} className={styles.icon}/>
      </div>
    </div>
  )
}

export default Footer