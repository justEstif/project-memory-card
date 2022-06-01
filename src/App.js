import React, { useState } from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";

import bg from "./components/img/bg.jpg";
import "./App.css";

function App() {
  let [score, setScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  const incrementScore = () => {
    setScore(score++)
  };
  const handleBestscore = () => {
    if (score > bestScore) {
      setBestScore(score)
    }
  }
  const reset = () => {
    handleBestscore()
    setScore(0)
  }
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        width: "100%",
        height: "100%",
      }}
    >
      <Header score={score} bestScore={bestScore} />
      <Gameboard
        increment={incrementScore}
        reset={reset}
      />
    </div>
  );
}

export default App;
