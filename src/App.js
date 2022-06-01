import React, { useState } from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";

import bg from "./components/img/bg.jpg";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        width: "100%",
        height: "100%",
      }}
    >
      <Header score={score} bestScore={bestScore} />
      <Gameboard clicked={clicked} />
    </div>
  );
}

export default App;
