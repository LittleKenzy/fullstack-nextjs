import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

const Category = ({ params }: { params: { category: string } }) => {
  console.log(params)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button text="See more" url={'#'} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1754220820888-e6f7e610a7a2?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill={true} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button text="See more" url={'#'} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1754220820888-e6f7e610a7a2?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill={true} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button text="See more" url={'#'} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1754220820888-e6f7e610a7a2?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill={true} />
        </div>
      </div>
    </div>
  )
}

export default Category