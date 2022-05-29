import { React, Fragment, useState, useEffect } from "react";
import "./App.css";
import MouseContext from "./MouseContext";
import Game from "./pages/Game";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import { Switch } from "react-router-dom";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function App() {
  const [isMD, setIsMD] = useState(false);
  const [multiplier, setMultiplier] = useState(0);
  const [bonusArray, setBonusArray] = useState([]);
  const [word, setWord] = useState("");
  const [alreadyEntered, setAlreadyEntered] = useState([]);
  const [score, setScore] = useState(0);
  const [bonus, setBonus] = useState([
    "low",
    "low",
    "medium",
    "medium",
    "high",
    "veryhigh",
    "nobonus",
    "nobonus",
    "nobonus",
    "nobonus",
    "nobonus",
    "nobonus",
    "nobonus",
    "nobonus",
    "nobonus",
    "nobonus",
  ]);

  useEffect(() => {
    const arr1 = [...bonus];
    const arr2 = shuffle(arr1);
    setBonus(arr2);
  }, []);

  document.body.onmousedown = (event) => {
    event.preventDefault();
    setIsMD(true);
    setWord("");
  };
  document.body.onmouseup = (event) => {
    event.preventDefault();
    if (word.length === 2) {
      setScore((prevScore) => prevScore + 5 + multiplier);
    }
    if (word.length === 3) {
      setScore((prevScore) => prevScore + 10 + multiplier);
    }
    if (word.length === 4) {
      setScore((prevScore) => prevScore + 15 + multiplier);
    }
    if (word.length === 5) {
      setScore((prevScore) => prevScore + 20 + multiplier);
    }
    if (word.length >= 6) {
      setScore((prevScore) => prevScore + 30 + multiplier);
    }
    setAlreadyEntered([]);
    setMultiplier(0);
    setIsMD(false);
  };

  const onBonusSelected = (newBonus) => {};

  const onMouseDownHandler = (letter, cellId) => {
    setAlreadyEntered((prevState) => [...prevState, cellId]);

    if (!alreadyEntered.includes(cellId)) {
      setWord((word) => word + letter);
      if (bonus[cellId] === "nobonus") {
        setMultiplier((prevState) => prevState + 0);
      }
      if (bonus[cellId] === "low") {
        setMultiplier((prevState) => prevState + 5);
      }
      if (bonus[cellId] === "medium") {
        setMultiplier((prevState) => prevState + 10);
      }
      if (bonus[cellId] === "high") {
        setMultiplier((prevState) => prevState + 15);
      }
      if (bonus[cellId] === "veryhigh") {
        setMultiplier((prevState) => prevState + 20);
      }
    }
  };

  return (
    <Fragment>
      <MouseContext.Provider
        value={{
          isMouseDown: isMD,
          word: word,
          onMouseDownHandler: onMouseDownHandler,
          alreadyEntered: alreadyEntered,
          score: score,
        }}
      >
        <Switch>
          <Route path={"/"} exact>
            <Home></Home>
          </Route>
          <Route path={"/game"} exact>
            <Game bonus={bonus} newBonusFun={onBonusSelected}></Game>
          </Route>
        </Switch>
      </MouseContext.Provider>
    </Fragment>
  );
}

export default App;
