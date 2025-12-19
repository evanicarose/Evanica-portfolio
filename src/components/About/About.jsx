import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I design and develop responsive, user-centered interfaces
                that prioritize experience and accessibility.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I build optimized and scalable back-end 
                systems that power fast and reliable applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/ui/uiIcon.png")} alt="UI/UX icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>
                I create intuitive and engaging designs
                that enhance user satisfaction and drive interaction. 
                Focuses on user-friendly and visually appealing designs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
