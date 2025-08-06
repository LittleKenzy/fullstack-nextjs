import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Hi, I am Little Kenzy</h1>
        <p className={styles.desc}>I am fullstack developer from Indonesia, currently living in surabaya, Indonesia. I am passionate about building web applications and learning new technologies.</p>
        <Button url="/portofolio" text="See our projects" />
      </div>
      <div className={styles.item}>
        <Image src="/image/hero.png" alt="Little Kenzy" width={500} height={500} className={styles.img} />
      </div>
    </div>
  );
}
