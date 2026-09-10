import Project from "../../components/project/Project";
import { projects } from "../../data/projects";

import styles from "./featured.module.scss";

const Featured = () => {
  return (
    <section className={styles.featured}>
      <div className={styles.featuredLayout}>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
