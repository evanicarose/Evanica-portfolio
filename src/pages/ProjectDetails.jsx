import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import projects from "../data/projects.json"; // Note: path relative to src/pages
import { getImageUrl, slugify } from "../utils";
import styles from "./ProjectDetails.module.css";

export const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => slugify(p.title) === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!project) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Project not found</h2>
        <Link to="/" className={styles.backLink}>
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const showDemo = Boolean(project.demo) && (project.demoPublic ?? true);
  const showSource = Boolean(project.source) && (project.sourcePublic ?? true);

  const handlePrevImage = () => {
    if (project.gallery && project.gallery.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.gallery.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (project.gallery && project.gallery.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === project.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>
        ← Back to Projects
      </Link>
      <div className={styles.header}>
        <img
          src={getImageUrl(project.imageSrc)}
          alt={`Image of ${project.title}`}
          className={styles.image}
        />
        <div className={styles.meta}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.description}>{project.description}</p>
          {Array.isArray(project.skills) && project.skills.length > 0 && (
            <ul className={styles.skills}>
              {project.skills.map((s, i) => (
                <li key={i} className={styles.skill}>
                  {s}
                </li>
              ))}
            </ul>
          )}
          {(showDemo || showSource) && (
            <div className={styles.links}>
              {showDemo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  View Demo
                </a>
              )}
              {showSource && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  View Source
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      {project.details && (
        <section className={styles.details}>
          {project.details.overview && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Overview</h3>
              <p className={styles.sectionBody}>{project.details.overview}</p>
            </div>
          )}
          {project.details.tech && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Tech Stack & Rationale</h3>
              <p className={styles.sectionBody}>{project.details.tech}</p>
            </div>
          )}
          {project.details.purpose && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Purpose</h3>
              <p className={styles.sectionBody}>{project.details.purpose}</p>
            </div>
          )}
        </section>
      )}
      {project.gallery && project.gallery.length > 0 && (
        <section className={styles.gallery}>
          <h3 className={styles.galleryTitle}>Project Gallery</h3>
          <div className={styles.carousel}>
            <button
              className={styles.carouselBtn}
              onClick={handlePrevImage}
              aria-label="Previous image"
            >
              ‹
            </button>
            <div className={styles.carouselContent}>
              <img
                src={getImageUrl(project.gallery[currentImageIndex].src)}
                alt={project.gallery[currentImageIndex].caption}
                className={styles.carouselImage}
                onClick={() => openLightbox(currentImageIndex)}
              />
              <p className={styles.carouselCaption}>
                {project.gallery[currentImageIndex].caption}
              </p>
              <div className={styles.carouselIndicators}>
                {project.gallery.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.indicator} ${
                      index === currentImageIndex ? styles.indicatorActive : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <button
              className={styles.carouselBtn}
              onClick={handleNextImage}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </section>
      )}
      {isLightboxOpen && project.gallery && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <button
            className={styles.lightboxBtn}
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={getImageUrl(project.gallery[currentImageIndex].src)}
            alt={project.gallery[currentImageIndex].caption}
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className={styles.lightboxBtn}
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};
