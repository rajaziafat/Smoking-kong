import React from "react";
import styles from "./Hero.module.css";
import timerApes from "assets/images/timer-apes.png";
import useCountdownTimer from "hooks/useCountdownTimer";
import useMediaQuery from "hooks/useMediaQuery";
import { Fade } from "react-awesome-reveal";
import poweredBy from "assets/images/poweredBy.png";

function Hero() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");

  return (
    <div className={styles.hero}>
      <div className="mb-50px">
        <div className="container-wrapper">
          <h1
            className={`${
              isBellow1000px
                ? "fs-40px lh-1_2 mb-5px"
                : "fs-64px lh-1_4 mb-10px"
            }  white text-center uppercase weight-9  `}
          >
            ThE First play to earn <br />{" "}
            <span className="pink">cannaverse</span>
          </h1>
          <img src={poweredBy} className={styles.poweredBy} alt="" />
        </div>
      </div>

      <div className="container-wrapper">
        <div className={`${styles.timer}`}>
          <img src={timerApes} className={styles.timerApes} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
