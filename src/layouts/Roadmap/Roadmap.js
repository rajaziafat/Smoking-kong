import React from "react";
import styles from "./Roadmap.module.css";
import avatar1 from "assets/images/avatars/img1.png";
import avatar2 from "assets/images/avatars/img2.png";
import avatar3 from "assets/images/avatars/img3.png";
import avatar4 from "assets/images/avatars/img4.png";
import useMediaQuery from "hooks/useMediaQuery";
import { Fade } from "react-awesome-reveal";
import coin from "assets/images/coin.png";

const RoadmapCard = ({ points, title, img, isActive = false }) => {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");

  return (
    <div className={`${styles.RoadmapCard} ${isActive ? styles.active : ""}`}>
      <div className={styles.profile}>
        <div className={styles.circleAndLine}>
          <img src={img} className={styles.avatar} alt="" />
          <div className={styles.imgLine}></div>
          <div className={styles.imgCircle}></div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.line}></div>
        <div>
          <h1
            className={`${
              isBellow1000px ? "fs-20px" : "fs-24px"
            }  white weight-7 mb-10px`}
          >
            {title}
          </h1>

          <ul className={styles.points}>
            {points.map((point, index) => (
              <li
                className={`${
                  isBellow1000px ? "fs-8px" : "fs-12px"
                } white weight-4 font-open-sans mb-5px`}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

function Roadmap() {
  return (
    <div>
      {/* <Fade cascade triggerOnce> */}
      <div className="container-wrapper">
        <h1 className="fs-48px white weight-9 mb-70px">Roadmap</h1>
      </div>

      <div className={styles.cards}>
        <RoadmapCard
          title="Q1- 2022"
          img={coin}
          points={[
            "Launching",
            "Partners reveal",
            "Presale - Deposit to secure your Island in the LEEF",
          ]}
        />
        <RoadmapCard
          title="Q2 - 2022"
          img={coin}
          isActive={true}
          points={[
            "04/20 Official reveal date",
            "$LEEF Coin  Pre-sale",
            "$LEEF Coin - Public sale",
          ]}
        />
        <RoadmapCard
          title="Q3- 2022"
          img={coin}
          points={[
            "Alpha release of the LEEF Island with shops, lands , and events available.",
          ]}
        />
        <RoadmapCard
          title="Q4- 2022"
          img={coin}
          points={[
            "Beta Release of the LEEF Island",
            "First LEEF Exhibition , open to public and professionals all around the world",
          ]}
        />
      </div>
      {/* </Fade> */}
    </div>
  );
}

export default Roadmap;
