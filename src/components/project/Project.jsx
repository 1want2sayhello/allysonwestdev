import { Link } from "react-router-dom";

import lightArrow from "../../assets/icons/light/light-arrow.svg";
import darkArrow from "../../assets/icons/dark/arrow.svg";

import styles from "./project.module.scss";

const Project = ({ project }) => {
  const { id, title, thumbnail, stack = [], isFeatured, liveUrl } = project;

  const hasCollab = project.collaborations?.organizations?.length > 0;

  return (
    <article
      data-project={id}
      className={`${styles.project} ${
        isFeatured ? styles.featuredProject : styles.compactProject
      }`}
      style={{ "--thumbnail": `url(${thumbnail})` }}
    >
      <div className={styles.info}>
        <div className={styles.projectHeading}>
          <h3 className={styles.title}>{title}</h3>
        </div>

        <div className={styles.stack} aria-label="Technology stack">
          {stack.map((icon, index) => (
            <div className={styles.icon} key={`${id}-stack-${index}`}>
              <img src={icon} alt="" aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <Link to={`/projects/${id}`} className={styles.cta}>
            Case Study
            <span className={styles.arrow} aria-hidden="true">
              <img src={lightArrow} alt="" className={styles.lightArrow} />

              <img src={darkArrow} alt="" className={styles.darkArrow} />
            </span>
          </Link>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className={`${styles.cta} ${styles.liveCTA}`}
            >
              See It Live
              <span className={styles.live} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {hasCollab && (
        <div className={styles.collaborations}>
          <h3> Developed With </h3>
          <div className={styles.logos}>
            {project.collaborations.organizations.map((organization) => (
              <img
                key={organization.name}
                src={organization.logo}
                alt={organization.name}
              />
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default Project;
