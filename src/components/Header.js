import "./styles/Header.css"
export default function Header(props) {
  const { score, bestScore } = props;

  return (
    <div className="header">
      <div className="title">Memory Game</div>
      <div className="scoreBoard">
        <div>Current Score: {score}</div>
        <div>Best Score: {bestScore}</div>
      </div>
    </div>
  );
}
