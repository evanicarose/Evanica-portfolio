import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Evanica!</h1>
        <p className={styles.description}>
          I'm a Computer Science student with a passion for full-stack web development.
        </p>
        <div>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="/my-resume.pdf" className={styles.contactBtn}>
          Download Resume
        </a>
        </div>
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
