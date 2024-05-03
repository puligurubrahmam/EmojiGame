import './index.css'
const WinOrLoseCard = props => {
  const {score, changeToPlay, result} = props
  const playAgain = () => {
    changeToPlay()
  }
  const winOrLose = result ? 'You Won' : 'You Lose'
  const image = result
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const scoreLabel = result ? 'Best Score' : 'Score'
  return (
    <div className="WinOrLossCard1">
      <div className="left-content">
        <h1 className="win-heading">{winOrLose}</h1>
        <p className="greet-para">{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button className="btn" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className="right-content">
        <img src={image} className="winImg" alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
