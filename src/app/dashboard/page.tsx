'use client'

import React from 'react'
import styles from './page.module.css'
import useSWR from 'swr'

const Dashboard = () => {
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then(res => res.json())

  const userId = 1 // contoh kalau mau filter per user
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    fetcher
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading data</div>

  interface Post {
    id: number;
    title: string;
  }

  return (
    <div className={styles.container}>
      {data?.map((post: Post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}

export default Dashboard
