import React from "react";
import MainHeader from "../components/header/MainHeader";
import Grid from "../components/lettersGrid/Grid";
import ResultBar from "../components/resultBar/ResultBar";
import Card from "../components/UI/Card";

function Game(props) {
  return (
    <Card>
      <MainHeader></MainHeader>
      <ResultBar></ResultBar>
      <Grid bonus={props.bonus} newBonusFun={props.newBonusFun}></Grid>
    </Card>
  );
}

export default Game;
