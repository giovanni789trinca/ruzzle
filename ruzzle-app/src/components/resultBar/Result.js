import { React, useContext, useState } from "react";
import MouseContext from "../../MouseContext";
import styles from "./Result.module.css";

function Result() {
  const mouseCtx = useContext(MouseContext);
  if (mouseCtx.word !== "") {
    return <p className={styles.result}>{mouseCtx.word}</p>;
  }
}

export default Result;
