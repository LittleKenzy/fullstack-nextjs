import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src='/image/contact.png' alt='' fill={true} className={styles.image} />
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <textarea placeholder="Message" className={styles.textArea} cols={30} rows={10}></textarea>
          <Button url="/" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact