import React from "react";
import styles from "./LeafButton.module.css";

function LeafButton({ icon, title, fontSize, iconStyles, style }) {
  return (
    <button
      className={`${styles.useLeaf} ${fontSize} block white uppercase weight-6 pointer`}
      style={style}
    >
      <img src={icon} alt="" style={iconStyles} /> {title}
    </button>
  );
}

export default LeafButton;
