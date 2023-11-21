import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vishal</h1>
        <p className={styles.description}>
          I'm a Front-end developer with 1 years of experience. I have knowledge
          of React and NodeJS. Reach out if you'd like my profile!
        </p>
        <a href="mailto:vishal65.p@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/vp.png")}
        alt="Hero image of Vishal"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
