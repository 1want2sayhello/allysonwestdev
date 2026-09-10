import { Link } from "react-router-dom";
import TECH_STACK_ICONS from "../../data/techIcons";
import styles from "./card.module.scss";

const Card = ({ title, description, techStack = [] }) => {
  return (
    <Link to="/project-detail">
      <div className={styles.card}>
        <div className={styles.cardContainer}>
          <div className={styles.cardImg}></div>
          <h2> {title} </h2>

          {techStack.map((tech) => (
            <div className={styles.techStack} key={tech}>
              <img src={TECH_STACK_ICONS[tech]} alt={tech} />
            </div>
          ))}

          <p>{description}</p>
          <div className={styles.cta}>
            <div className={styles.button}> Case Study </div>
            <div className={`${styles.button} ${styles.demoBtn}`}>
              Live Demo
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
