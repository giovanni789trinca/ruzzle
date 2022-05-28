import React from "react";
import { BiTimer } from "react-icons/bi";
import styles from "./Timer.module.css";

function Timer() {
  return (
    <div className={styles.timer}>
      <BiTimer />
      <p className={styles.timer__decrease}>1:12</p>
    </div>
  );
}

export default Timer;
