import React from "react";
import styles from "./Button.module.css";
import { useHistory } from "react-router-dom";

function Button(props) {
  const history = useHistory();
  const classes = styles.btn + " " + styles[props.className];
  const endGame = () => {
    history.push("/");
  };
  return (
    <button className={classes} onClick={endGame}>
      {props.children}
    </button>
  );
}

export default Button;
