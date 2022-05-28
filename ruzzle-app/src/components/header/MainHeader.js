import React from "react";
import EndButton from "./EndButton";
import styles from "./MainHeader.module.css";
import Score from "./Score";
import Timer from "./Timer";

function MainHeader() {
  return (
    <div className={styles.header}>
      <Timer></Timer>
      <Score></Score>
      <EndButton></EndButton>
    </div>
  );
}

export default MainHeader;
