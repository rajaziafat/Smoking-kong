import React from "react";
import styles from "./Point.module.css";

const Point = ({ title }) => {
  return (
    <div className={styles.point}>
      <div className={styles.bullet}></div>
      <p className="fs-16px white weight-5 lh-1_3">{title}</p>
    </div>
  );
};

export default Point;
