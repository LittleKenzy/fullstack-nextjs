import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'

// Type untuk satu item
type Item = {
  id: number
  title: string
  desc: string
  image: string
}

// Ambil key dari object items
type CategoryKey = keyof typeof items

// Ambil data berdasarkan kategori
const getData = async (cat: string): Promise<Item[]> => {
  if (!Object.keys(items).includes(cat)) {
    notFound()
  }

  const categoryItems = items[cat as CategoryKey]

  if (!categoryItems || categoryItems.length === 0) {
    notFound()
  }

  return categoryItems
}

const Category = async ({ params }: { params: { category: string } }) => {
  const data = await getData(params.category)

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See more" url={'#'} />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={item.image}
              alt={item.title}
              fill
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category
