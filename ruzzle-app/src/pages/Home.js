import React from "react";
import MainHeader from "../components/header/MainHeader";
import Grid from "../components/lettersGrid/Grid";
import ResultBar from "../components/resultBar/ResultBar";
import Card from "../components/UI/Card";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home(props) {
  return (
    <Card>
      <Link to={"/game"} className={styles.btn}>
        Play
      </Link>
    </Card>
  );
}

export default Home;
