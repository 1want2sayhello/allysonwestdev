import lightIcons from "../../data/lightIcons";
import dividerIcon from "../../assets/icons/light/divider-icon.svg";

import styles from "./About.module.scss";

const About = () => {
  const techStack = [
    {
      name: "React",
      icons: [lightIcons.react],
    },
    {
      name: "Vite",
      icons: [lightIcons.vite],
    },
    {
      name: "Sass",
      icons: [lightIcons.sass],
    },

    {
      name: "Javascript",
      icons: [lightIcons.javascript],
    },
  ];

  return (
    <section className={styles.about}>
      <div className={styles.header}>
        <span> About Me </span>
        <h1> I'm Allyson West </h1>
        <h3> I'm a front-end developer who loves design. </h3>
      </div>

      <div className={styles.accoladeSection}>
        <div className={styles.divider}>
          <img className={styles.dividerIcon} src={dividerIcon} alt="divider" />

          <div className={styles.accolades}>
            <div className={styles.accolade}>
              <div className={styles.accoladeIcon}>
                <img src={lightIcons.work} alt="grad icon" />
              </div>
              <div className={styles.thinBorder}></div>
              <h3> Real World Experience </h3>
              <p>
                <span className={styles.highlight}>6+ Month</span> Internship{" "}
                <br />
                Indiana Sports Corp.
              </p>
            </div>
            <div className={styles.accolade}>
              <div className={styles.accoladeIcon}>
                <img src={lightIcons.education} alt="grad icon" />
              </div>
              <div className={styles.thinBorder}></div>
              <h3> Education </h3>
              <p>
                <span className={styles.highlight}>Bachelor of Science</span>
                <br />
                Media Arts & Science <br /> Luddy | IUI
              </p>
            </div>
            <div className={styles.accolade}>
              <div className={styles.accoladeIcon}>
                <img src={lightIcons.process} alt="grad icon" />
              </div>
              <div className={styles.thinBorder}></div>
              <h3> Style & Execution </h3>
              <p>
                Building user-centered,
                <span className={styles.highlight}> intentionally </span>
                designed
                <br /> web interfaces
              </p>
            </div>
          </div>
          <img
            className={`${styles.rotatedDivider} ${styles.dividerIcon}`}
            src={dividerIcon}
            alt="divider"
          />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.left}>
            <h3> I play matchmaker between code and design.</h3>
            <span>
              <p>
                For me, great front-end development is about building the
                smooth, intentional experiences users expect - where code and
                visual storytelling meet.
              </p>
              <p>
                Whether working on a team or working directly with a client, my
                goal is the same: I focus on making the transition from design
                to production effortless.
              </p>
            </span>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.right}>
            <h3>Front-End Foundation</h3>
            <div className={styles.techStack}>
              {techStack.map((tech) => (
                <div className={styles.techItem} key={tech.name}>
                  {tech.icons.map((icon, index) => (
                    <img
                      key={`${tech.name}-${index}`}
                      src={icon}
                      alt=""
                      aria-hidden="true"
                    />
                  ))}
                </div>
              ))}
            </div>

            <span>
              <p>
                JavaScript, React, Sass, and HTML form my core stack. My HCI
                certificate has influenced how I approach each project,
                emphasizing a responsive and intuitive experience.
              </p>

              <p>
                No matter the project, I am always ready to learn the right
                technology to solve a problem in front of me.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
