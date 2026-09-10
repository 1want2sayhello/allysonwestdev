import { useState } from "react";
import { useParams } from "react-router-dom";

import { projects } from "../../data/projects";
import styles from "./projectDetails.module.scss";

const ProjectPage = () => {
  const { id } = useParams();
  const [activeDemo, setActiveDemo] = useState(null);

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <h3> Project Not Found. </h3>;
  }

  return (
    <>
      <section className={styles.project}>
        <div className={styles.container}>
          <div className={styles.thumbnail}>
            <img src={project.thumbnail} alt="" />
            <div className={styles.header}>
              <h2> {project.title} </h2>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.vertical}>
              <div className={styles.roles}>
                <p> Role </p>
                <h3>
                  {project.role.map((role) => (
                    <span key={role}> {role} </span>
                  ))}
                </h3>
              </div>

              <div>
                <p> Type </p>
                <h3> {project.type} </h3>
              </div>

              <div>
                <p> Platform </p>
                <h3> Web App (Optimized for Mobile) </h3>
              </div>

              <div className={styles.liveUrl}>
                <p> Live URL</p>
                <h3>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit {project.title}
                  </a>
                </h3>
              </div>
            </div>
            <div className={styles.horizontal}>
              <h2 className={styles.description}> {project.description} </h2>

              <div className={`${styles.context} ${styles.problem}`}>
                <div className={styles.problemContext}>
                  <h3> Problem</h3>
                  <p>{project.problem}</p>
                </div>
                <div className={styles.problemContext}>
                  <h3> Challenge </h3>
                  <p>{project.challenge}</p>
                </div>
              </div>

              <div className={`${styles.context} ${styles.solutionsContext}`}>
                <h2> Solution & Process </h2>
                <div className={styles.solutions}>
                  {project.solutions?.map((solution) => (
                    <article
                      key={solution.title}
                      className={styles.solutionColumn}
                    >
                      <h3> {solution.category} </h3>
                      <h4> {solution.title} </h4>
                      <p> {solution.description}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className={`${styles.context} ${styles.demoContext}`}>
                {project.demos?.map((demo) => (
                  <button
                    key={demo.id}
                    className={styles.demoCard}
                    onClick={() => setActiveDemo(demo)}
                    type="button"
                  >
                    <video
                      src={demo.preview}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />

                    <div className={styles.demoLabel}>
                      <h3>{demo.title}</h3>
                      <span>View Demo</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className={styles.context}>
                <h3>Results</h3>
                {project.results.map((result, index) => (
                  <p key={index}>{result}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {activeDemo && (
        <div className={styles.demoModal} onClick={() => setActiveDemo(null)}>
          <div
            className={styles.demoModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeDemo}
              onClick={() => setActiveDemo(null)}
              type="button"
              aria-label="Close demo"
            >
              ×
            </button>

            <video src={activeDemo.video} controls autoPlay playsInline />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectPage;
