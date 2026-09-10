import text from "../../assets/contact/contact-text.svg";
import bulb from "../../assets/contact/contact-small-bulb.svg";
import light_icons from "../../data/lightIcons";
import SOCIAL_URLS from "../../data/socialUrls";
import styles from "./contact.module.scss";

const Contact = () => {
  const particles = [
    [57, 44, 2, 37],
    [48, 62, 1, 30],
    [66, 28, 1, 36],
    [31, 52, 2, 34],
    [74, 58, 1, 40],
    [38, 72, 1, 29],
    [49, 58, 1, 37],
    [61, 38, 2, 31],
    [34, 48, 1, 39],
    [68, 55, 1, 33],
    [27, 62, 1, 38],
    [54, 30, 2, 31],
    [74, 45, 1, 36],
    [43, 71, 1, 32],
    [18, 54, 1, 41],
    [80, 60, 1, 34],
    [48, 20, 1, 37],
    [37, 40, 2, 35],
    [66, 72, 1, 39],
    [22, 34, 1, 30],
    [58, 64, 1, 37],
    [71, 27, 2, 32],
    [31, 76, 1, 42],
    [52, 46, 1, 36],
    [13, 66, 1, 40],
    [77, 52, 2, 33],
    [40, 25, 1, 38],
    [63, 41, 1, 35],
    [29, 57, 1, 39],
    [56, 78, 1, 31],
    [84, 36, 1, 41],
  ];

  return (
    <>
      <div className={styles.container}>
        <section className={styles.contact}>
          <div className={styles.scene}>
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
                      "--delay": index % 12,
                      "--radius": `${4 + (index % 5) * 2}px`,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className={styles.door}>
              <div className={styles.bulb}>
                <img src={bulb} alt="" />
              </div>
            </div>

            <div className={styles.beam}>
              <img src={text} alt="" />
            </div>
          </div>
        </section>
        <section className={styles.contactInfo}>
          <div className={styles.actions}>
            <h3> hello@allysonwest.dev </h3>
            <div className={styles.socials}>
              <div className={styles.cta}>
                <a href={SOCIAL_URLS.linkedIn} target="_blank" rel="noreferrer">
                  <img src={light_icons.linkedIn} alt="LinkedIn" />
                </a>
              </div>
              <div className={styles.cta}>
                <a href={SOCIAL_URLS.github} target="_blank" rel="noreferrer">
                  <img src={light_icons.github} alt="github" />
                </a>
              </div>
              <div className={styles.cta}>
                <a href={SOCIAL_URLS.resume} target="_blank" rel="noreferrer">
                  <img src={light_icons.resume} alt="resume" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
