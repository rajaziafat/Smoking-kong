import React from "react";
import styles from "./CollectionCard.module.css";

const CollectionCard = ({ img }) => {
  return (
    <div className={styles.card}>
      <img src={img} className="w-full block" alt="" />
    </div>
  );
};
export default CollectionCard;
