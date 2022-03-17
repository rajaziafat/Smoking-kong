import useMediaQuery from "hooks/useMediaQuery";
import React, { useRef, useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuref = useRef();
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");

  const toggler = () => {
    if (menuref.current.clientHeight === 0) {
      menuref.current.style.height = menuref.current.scrollHeight + "px";
      setIsOpen(true);
    } else {
      menuref.current.style.height = 0 + "px";
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.accordionWrapper}>
      <button className={`${styles.accordionButton} pointer`} onClick={toggler}>
        <span
          className={`${
            isBellow1000px ? "fs-20px" : "fs-24px"
          }  white weight-7 text-left lh-1_4`}
        >
          {question}
        </span>
        <div
          className={`${styles.toggleSign} ${isOpen ? styles.open : ""}`}
        ></div>
      </button>
      <div className={styles.accordionBodyWrapper} ref={menuref}>
        <div className={styles.accordionBody}>
          <p
            className={`white weight-4 ${
              isBellow1000px ? "fs-14px" : "fs-16px"
            }  lh-1_6`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Accordion;
