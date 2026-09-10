import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import TECH_STACK_ICONS from "../../data/techIcons";
import SOCIAL_URLS from "../../data/socialUrls";
import styles from "./mobileNav.module.scss";

const MobileNav = ({ socials }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (!isOpen) return;

    scrollYRef.current = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((current) => !current);
  };

  const closeMenu = () => setIsOpen(false);

  const navigate = useNavigate();

  const handleNavClick = (id) => () => {
    setIsOpen(false);
    navigate(`/#${id}`, { replace: true });

    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <div className={styles.mobileNav}>
      {isOpen && (
        <button type="button" className={styles.backdrop} onClick={closeMenu} />
      )}

      <div className={styles.buttonContainer}>
        <button
          className={`${styles.toggleMenu} ${isOpen ? styles.showCloseBtn : ""}`}
          onClick={toggleMenu}
        >
          <div className={styles.burger}>
            <span className={styles.patty}></span>
            <span className={styles.patty}></span>
            <span className={styles.patty}></span>
          </div>
        </button>
      </div>

      <nav className={`${styles.mobileMenu} ${isOpen ? styles.menuOpen : ""}`}>
        <div className={styles.links}>
          <div className={styles.linkBtn}>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </div>
          <div className={styles.linkBtn}>
            <button type="button" onClick={handleNavClick("featured")}>
              Work
            </button>
          </div>
          <div className={styles.linkBtn}>
            <button type="button" onClick={handleNavClick("about")}>
              About
            </button>
          </div>
          <div className={styles.linkBtn}>
            <button type="button" onClick={handleNavClick("contact")}>
              Contact
            </button>
          </div>
          <div className={styles.socials}>
            {socials.map((social) => (
              <a
                className={styles.icon}
                key={socials}
                href={SOCIAL_URLS[social]}
                target="_blank"
                rel="noreferrer"
              >
                <img src={TECH_STACK_ICONS[social]} alt={social} />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
