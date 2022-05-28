import React, { useContext } from "react";
import MouseContext from "../../MouseContext";

function Score() {
  const mouseCTx = useContext(MouseContext);
  return <p>{mouseCTx.score}</p>;
}

export default Score;
