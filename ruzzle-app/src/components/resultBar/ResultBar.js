import React from "react";
import Result from "./Result";
import styles from "./ResultBar.module.css";

function ResultBar() {
  return (
    <div className={styles["result-bar"]}>
      <Result></Result>
    </div>
  );
}

export default ResultBar;
