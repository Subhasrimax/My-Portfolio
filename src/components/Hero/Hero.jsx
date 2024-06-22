//import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Subhasri</h1>
        <p className={styles.description}>
        I am a tech enthusiast who love to build things. 
        Web and Software developer, Machine learning, Data Science, 
        Data Analytics, Cloud, Cyber security and finance enthusiast. 
        Challenge seeker, continuous learner, 
        have huge interest in learning and exploring everything.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
