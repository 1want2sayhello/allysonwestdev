import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLenis } from "./useLenis";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <> {children} </>;
};

export default ScrollToTop;
