import React from "react";
import { Link } from "react-router-dom";

import styles from "./ProjectCard.module.css";
import { getImageUrl, slugify } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const to = `/projects/${slugify(title)}`;
  return (
    <Link to={to} className={styles.cardLink} aria-label={`View details for ${title}`}>
      <div className={styles.container}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {Array.isArray(skills) && (
          <ul className={styles.skills}>
            {skills.length >= 4 ? (
              <>
                {skills.slice(0, 2).map((skill, id) => (
                  <li key={id} className={styles.skill}>
                    {skill}
                  </li>
                ))}
                <li className={styles.skill}>See More</li>
              </>
            ) : (
              skills.map((skill, id) => (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </Link>
  );
};
