import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const classes = styles.btn + " " + styles[props.className];
  return <button className={classes}>{props.children}</button>;
}

export default Button;
