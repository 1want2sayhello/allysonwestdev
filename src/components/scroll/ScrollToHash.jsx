import { useEffect } from "react";
import { getLenis } from "./useLenis";
import { useLocation } from "react-router-dom";

const ScrollToHash = ({ children }) => {
  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) return;

    if (hash) {
      const id = hash.replace("#", "");

      const lenis = getLenis();
      const el = document.getElementById(id);
      if (el) {
        if (lenis) {
          lenis.scrollTo(el);
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [hash, key]);

  return <> {children} </>;
};

export default ScrollToHash;
