import React, { useState, useEffect } from "react";
import ArrowUp from "../../arrow-up.webp";
function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const checkScrollTop = () => {
    if (!showScrollTop && window.pageYOffset > 200) {
      setShowScrollTop(true);
    } else if (showScrollTop && window.pageYOffset <= 200) {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 1, behavior: "smooth" });
    setShowScrollTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);
  return (
    <div
      className="scrollTop"
      onClick={scrollToTop}
      style={{ height: 40, display: showScrollTop ? "flex" : "none" }}
    >
      <img
        src={ArrowUp}
        alt={"up-arrow-icon"}
        loading="eager"
        style={{ height: 80, width: 80 }}
      />
    </div>
  );
}

export default ScrollToTop;
