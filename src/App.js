import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";

import bg from "./components/img/bg.jpg";
import "./App.css";

// export default function App() {
//   let [score, setScore] = useState(0);
//   const [bestScore, setBestScore] = useState(0);

//   const incrementScore = () => {
//     setScore((score) => score + 1);
//     // console.log(score);
//   };

//   const reset = () => setScore((score) => score - score);

//   const handleBestScore = () => {
//     console.log(`Score: ${score}, Best: ${bestScore}`);
//     if (score > bestScore) setBestScore(score);
//     reset();
//   };

//   // useEffect(() => {
//   //   incrementScore();
//   // }, [score]);

//   // useEffect(() => {
//   //   handleBestScore();
//   // }, [bestScore]);

//   return (
//     <div
//       className="app"
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "repeat",
//         width: "100%",
//         height: "100%",
//       }}
//     >
//       <Header score={score} bestScore={bestScore} />
//       <Gameboard increment={incrementScore} handleBestscore={handleBestScore} />
//     </div>
//   );
// }

const bgStyle = {
  backgroundImage: `url(${bg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
  width: "100%",
  height: "100%",
};
export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestscore] = useState(0);

  const changeScore = (num) => setScore(num);
  const changeBest = (num) => setBestscore(num)
  const resetScore = () => setScore(0);

  return (
    <div className="app" style={bgStyle}>
      <Header score={score} bestScore={bestScore} />
      <Gameboard changeScore={changeScore} reset={resetScore} changeBest={changeBest} />
    </div>
  );
}
