import React, { useContext } from "react";
import MouseContext from "../../MouseContext";
import styles from "./Cell.module.css";
function Cell(props) {
  const mouseCtx = useContext(MouseContext);

  const onMouseEnter = (event) => {
    event.preventDefault();
    if (mouseCtx.isMouseDown) {
      props.newBonusFun(props.bonus[props.id]);
      mouseCtx.onMouseDownHandler(event.target.innerText, props.id);
    } else {
      return;
    }
  };

  return (
    <div
      className={`
      ${styles.cell}
      ${
        mouseCtx.isMouseDown &&
        mouseCtx.alreadyEntered.includes(props.id) &&
        styles.hovered
      }
      ${props.bonus[props.id] === "nobonus" ? styles.nobonus : ""}
      ${props.bonus[props.id] === "low" ? styles.low : ""}
      ${props.bonus[props.id] === "medium" ? styles.medium : ""}
      ${props.bonus[props.id] === "high" ? styles.high : ""}
      ${props.bonus[props.id] === "veryhigh" ? styles.veryhigh : ""}
      `}
      onMouseEnter={onMouseEnter}
    >
      {props.letter}
    </div>
  );
}

export default Cell;
