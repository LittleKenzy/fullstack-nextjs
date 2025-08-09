import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }

  return res.json()
}

const Blog = async () => {
  interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
      {data.map((item: Post) => (
        <Link href={'/blog/testId'} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={'https://images.unsplash.com/photo-1754220820888-e6f7e610a7a2?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
              alt=""
              width={400}
              height={250}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog