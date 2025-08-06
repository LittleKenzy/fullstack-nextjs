import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.unsplash.com/photo-1754079132799-c766676cda0a?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Little Kenzy" className={styles.img} fill={true} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Little Kenzy</h1>
          <h2 className={styles.imgDesc}>Fullstack Developer, UI/UX Designer, and a passionate learner</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Am I?</h1>
          <p className={styles.desc}>My name is Kenzy, and Im a full-stack developer with a passion for creating user-friendly and visually appealing applications.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we can do?</h1>
          <p className={styles.desc}>I can help you create a website that meets your needs, whether you need a simple landing page or a complex web application.</p>
          <br />
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About