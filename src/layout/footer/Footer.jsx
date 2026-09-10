import { Link } from "react-router-dom";

import BrandMark from "../../assets/updated-logo/bulb-logo-detail.svg";
import light_icons from "../../data/lightIcons";
import SOCIAL_URLS from "../../data/socialUrls";
import styles from "./footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <section className={styles.logo}>
        <nav className={styles.nav}>
          <div className={styles.navSection}>
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Back to Top
            </button>
            <Link to="/#about"> About Me </Link>
            <Link to="/#contact">Contact Me </Link>
            <Link to="/#featured"> My Work </Link>
          </div>

          <div className={styles.border}></div>
          <div className={styles.navSection}>
            <Link to={"projects/tech-tunes"}> Tech Tunes </Link>
            <Link to={"projects/experience-indy"}> Interactive Map App </Link>
            <Link to={"projects/fizz-fix"}> Fizz Fix </Link>
          </div>
        </nav>

        <div className={styles.brand}>
          <div className={styles.brandMark}>
            <img src={BrandMark} alt="geometric lightbulb logo" />
          </div>

          <div className={styles.name}>
            <h1> Allyson West </h1>
          </div>
        </div>
      </section>

      <section className={`${styles.contentContainer}`}>
        <section className={`${styles.content} ${styles.contact}`}>
          <div className={`${styles.left} ${styles.email}`}>
            <a href="mailto:hello@allysonwest.dev"> hello@allysonwest.dev </a>
          </div>
          <div className={`${styles.right} ${styles.socials}`}>
            <div className={styles.icon}>
              <a href={SOCIAL_URLS.github} target="_blank" rel="noreferrer">
                <img src={light_icons.github} alt="github" />
              </a>
            </div>

            <div className={styles.icon}>
              <a href={SOCIAL_URLS.linkedIn} target="_blank" rel="noreferrer">
                <img src={light_icons.linkedIn} alt="linkedin" />
              </a>
            </div>
          </div>
        </section>
        <div className={styles.border}></div>
        <section className={`${styles.content} ${styles.copyright}`}>
          <div className={styles.left}>
            <h4> &copy; {currentYear} Allyson West </h4>
          </div>
          <div className={`${styles.right} ${styles.tag}`}>
            <h4> Made with 💡 </h4>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
