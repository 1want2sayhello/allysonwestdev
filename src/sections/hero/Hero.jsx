import { Link } from "react-router-dom";
import { preload } from "react-dom";
import bulb from "../../assets/light-bulb.avif";

import lightIcons from "../../data/lightIcons";
import styles from "./Hero.module.scss";

const Hero = () => {
  preload(bulb, { as: "image", fetchPriority: "high" });

  const particles = [
    [42, 34, 2, 15],
    [57, 44, 2, 18],
    [48, 62, 2, 14],
    [66, 28, 2, 17],
    [31, 52, 2, 16],
    [74, 58, 2, 19],
    [38, 72, 2, 13],
    [49, 58, 1, 16],
    [61, 38, 2, 14],
    [34, 48, 1, 17],
    [68, 55, 2, 15],
    [27, 62, 1, 18],
    [54, 30, 2, 13],
    [74, 45, 1, 16],
    [43, 71, 2, 14],
    [18, 54, 1, 19],
    [80, 60, 2, 15],
    [48, 20, 1, 17],
    [37, 40, 2, 16],
    [66, 72, 1, 18],
    [22, 34, 2, 13],
    [58, 64, 1, 15],
    [71, 27, 2, 14],
    [31, 76, 1, 19],
    [52, 46, 2, 16],
    [13, 66, 1, 18],
    [77, 52, 2, 14],
    [40, 25, 1, 17],
    [63, 41, 2, 15],
    [29, 57, 1, 18],
    [56, 78, 2, 13],
    [84, 36, 1, 19],
    [46, 51, 2, 14],
    [24, 44, 1, 17],
    [73, 68, 2, 15],
    [35, 18, 1, 18],
    [59, 35, 2, 16],
    [16, 74, 1, 20],
  ];
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
      name: "Javscript",
      icons: [lightIcons.javascript],
    },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.bulbContainer}>
        <div className={styles.visual}>
          <div className={styles.bulb}>
            <img
              src={bulb}
              alt=""
              width="520"
              height="1040"
              fetchPriority="high"
              decoding="async"
            />
            <div className={styles.glow}>
              <div className={styles.dust} aria-hidden="true">
                {particles.map(([x, y, size, duration], index) => (
                  <span
                    key={index}
                    style={{
                      "--x": `${x}%`,
                      "--y": `${y}%`,
                      "--size": `${size}px`,
                      "--duration": `${duration}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.banner}>
        <h1 className={styles.heading}> Front End Developer </h1>
        <h2 className={styles.subheading}> Intentional Designer</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <h4>
            <span className={styles.highlight}>Available </span>
            to bring your next idea to life with front-end development,
            interface <br className={styles.mobileBreak} /> & web design.
          </h4>

          <p className={styles.locationLabel}>
            Based in
            <span className={styles.highlight}> Indianapolis, IN</span>
          </p>
        </div>
        <div className={styles.action}>
          <Link to={"/#featured"} className={styles.cta}>
            View Projects
          </Link>
        </div>
        <div className={styles.techStack}>
          <span className={styles.label}>Built With</span>
          {techStack.map((stackIcons) => (
            <div className={styles.icon} key={stackIcons.name}>
              {stackIcons.icons.map((icon, index) => (
                <div>
                  <img key={index} src={icon} alt="" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.projectIntro}>
        <div className={styles.projectHeading}>
          <h1> Building With Intention </h1>
          <h4>
            From real-world client work to personal builds,{" "}
            <br className={styles.mobileBreak} /> I approach every project with
            the same mindset: <br /> thoughtful design, solid functionality, and
            attention to detail that shape overall user experience.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
