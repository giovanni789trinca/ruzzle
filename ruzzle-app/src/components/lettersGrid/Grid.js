import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import styles from "./Grid.module.css";

function Grid(props) {
  const [letters, setLetters] = useState([]);
  useEffect(() => {
    const letters = [];
    const alphabet = [
      "A",
      "A",
      "A",
      "A",
      "A",
      "B",
      "B",
      "C",
      "C",
      "D",
      "D",
      "E",
      "E",
      "E",
      "E",
      "E",
      "F",
      "F",
      "G",
      "G",
      "H",
      "H",
      "I",
      "I",
      "I",
      "I",
      "L",
      "L",
      "M",
      "M",
      "N",
      "N",
      "O",
      "O",
      "O",
      "O",
      "P",
      "Q",
      "R",
      "R",
      "S",
      "S",
      "T",
      "T",
      "U",
      "U",
      "U",
      "V",
      "V",
      "Z",
      "Z",
    ];

    for (let i = 0; i < 16; i++) {
      letters[i] = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    setLetters(letters);
  }, []);

  return (
    <div className={styles.grid}>
      {letters.map((el, index) => {
        return (
          <Cell
            key={Math.random()}
            letter={el}
            id={index}
            bonus={props.bonus}
            newBonusFun={props.newBonusFun}
          ></Cell>
        );
      })}
    </div>
  );
}

export default Grid;
