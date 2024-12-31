import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation(); // Get the current location (path)

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, [location]); // This will run every time the route changes

  return null;
};

export default ScrollToTop;
