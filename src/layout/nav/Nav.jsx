import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

import logo from "../../assets/updated-logo/geometric-bulb-light.svg";

import TECH_STACK_ICONS from "../../data/techIcons";
import SOCIAL_URLS from "../../data/socialUrls";

import styles from "./nav.module.scss";

const Nav = ({ socials }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="" />
          </div>
        </Link>
      </div>
      <nav className={styles.navigation}>
        <div className={styles.links}>
          <Link to="/#featured" className={styles.projectLink}>
            Work
          </Link>
          <Link to="/#about" className={styles.hoverScale}>
            About
          </Link>
          <Link to="/#contact" className={styles.hoverScale}>
            Contact
          </Link>
        </div>
        <div className={styles.socials}>
          {socials.map((social) => (
            <a
              className={styles.icon}
              key={social}
              href={SOCIAL_URLS[social]}
              target="_blank"
              rel="noreferrer"
            >
              <img src={TECH_STACK_ICONS[social]} alt={social} />
            </a>
          ))}
        </div>
      </nav>

      <MobileNav socials={["github", "linkedIn", "resume"]} />
    </div>
  );
};

export default Nav;
