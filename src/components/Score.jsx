import '../styles/Score.css';

function Score({ currentScore, bestScore }) {
  return (
    <div className="scores-container">
      <div className="score">
        <p className="score-title">Current Score</p>
        <p className="score-value">{currentScore}</p>
      </div>
      <div className="score">
        <p className="score-title">Best Score</p>
        <p className="score-value">{bestScore}</p>
      </div>
    </div>
  );
}

export default Score;
