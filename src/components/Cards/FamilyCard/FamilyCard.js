import React from "react";
import ReactParallaxTilt from "react-parallax-tilt";
import styles from "./FamilyCard.module.css";

const FamilyCard = ({ img, title, subtitle }) => {
  return (
    <ReactParallaxTilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="lightblue"
      glarePosition="all"
      style={{ borderRadius: "inherit" }}
    >
      <div className={styles.card}>
        <img src={img} className={`${styles.cardImg} mb-35px`} alt="" />
        <h4 className="fs-24px white text-center weight-7 mb-10px">{title}</h4>
        <p className="fs-16px white text-center weight-5">{subtitle}</p>
      </div>
    </ReactParallaxTilt>
  );
};

export default FamilyCard;
