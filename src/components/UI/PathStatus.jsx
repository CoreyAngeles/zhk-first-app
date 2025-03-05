import React from "react";
import styles from "./PathStatus.module.scss";

const PathStatus = ({ pathStatus }) => {
  return (
    <div className={styles["status-wrapper"]}>
      <div className={styles["status-content"]}>{pathStatus}</div>
    </div>
  );
};

export default PathStatus;
