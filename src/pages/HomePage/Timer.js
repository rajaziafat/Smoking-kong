import useCountdownTimer from "hooks/useCountdownTimer";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "./HomePage.module.css";

function Timer() {
  const { days, hours, minutes, seconds } = useCountdownTimer({
    providedDate: "March 25, 2022 00:00:00",
  });
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");

  return (
    <div className="container-wrapper">
      <div className={styles.timerCounts}>
        <div>
          <h1
            className={`${
              isBellow1000px ? "fs-32px" : "fs-48px"
            }  white weight-7 mb-5px text-center`}
          >
            {days < 10 ? "0" : ""}
            {days}
          </h1>
          <p
            className={`${
              isBellow1000px ? "fs-14px" : "fs-18px"
            } white weight-5 text-center`}
          >
            Days
          </p>
        </div>
        <div>
          <h1
            className={`${
              isBellow1000px ? "fs-32px" : "fs-48px"
            }  white weight-7 mb-5px text-center`}
          >
            {hours < 10 ? "0" : ""}
            {hours}
          </h1>
          <p
            className={`${
              isBellow1000px ? "fs-14px" : "fs-18px"
            } white weight-5 text-center`}
          >
            Hours
          </p>
        </div>
        <div>
          <h1
            className={`${
              isBellow1000px ? "fs-32px" : "fs-48px"
            }  white weight-7 mb-5px text-center`}
          >
            {minutes < 10 ? "0" : ""}
            {minutes}
          </h1>
          <p
            className={`${
              isBellow1000px ? "fs-14px" : "fs-18px"
            } white weight-5 text-center`}
          >
            Minutes
          </p>
        </div>
        <div>
          <h1
            className={`${
              isBellow1000px ? "fs-32px" : "fs-48px"
            }  white weight-7 mb-5px text-center`}
          >
            {seconds < 10 ? "0" : ""}
            {seconds}
          </h1>
          <p
            className={`${
              isBellow1000px ? "fs-14px" : "fs-18px"
            } white weight-5 text-center`}
          >
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timer;
