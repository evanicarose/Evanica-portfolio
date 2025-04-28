import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div className={styles.links}>
        <a href="mailto:0417evanicarose@gmail.com" className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
        </a>
        <a
          href="https://www.linkedin.com/in/evanica-rose-juarbal-3105b4312/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/evanicarose"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github" />
        </a>
      </div>
    </footer>
  );
};
