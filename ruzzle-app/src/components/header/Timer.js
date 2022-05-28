import React from "react";
import { BiTimer } from "react-icons/bi";
import styles from "./Timer.module.css";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

function Timer() {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <p>Time's up!</p>;
    } else {
      // Render a countdown
      return (
        <span>
          0{minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <div className={styles.timer}>
      <BiTimer />
      <p className={styles.timer__decrease}>
        <Countdown date={Date.now() + 60000} renderer={renderer} />
        {/* <Countdown date={moment(Date.now() + 60000).format("mm:ss a")} /> */}
      </p>
    </div>
  );
}

export default Timer;
