import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Hi, I am Little Kenzy</h1>
          <p className={styles.description}>I am fullstack developer from Indonesia, currently living in surabaya, Indonesia. I am passionate about building web applications and learning new technologies.</p>
          <button className={styles.ctaButton}>See our projects</button>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/hero.png"
            alt="Hero Image"
            width={500}
            height={500}
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </div>
  );
}
