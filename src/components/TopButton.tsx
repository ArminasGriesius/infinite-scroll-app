import { useEffect, useState } from "react";
import css from "./TopButton.module.css";

const TopButton = () => {
  const [scrollerVisibility, setScrollerVisibility] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollerVisibility && window.scrollY > 1000) {
        setScrollerVisibility(true);
      } else if (scrollerVisibility && window.scrollY < 1000) {
        setScrollerVisibility(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollerVisibility]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={css.topButtonContainer}>
      <button
        onClick={scrollTop}
        className={`${scrollerVisibility && css.visible} ${css.topButton}`}
      >
        <i className={css.arrowUp}></i>
      </button>
    </div>
  );
};

export default TopButton;
