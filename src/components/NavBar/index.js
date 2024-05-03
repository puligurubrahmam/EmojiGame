import './index.css'
const NavBar = props => {
  const {score, topscore, pass} = props
  
  return (
    <nav className="navigation-bar">
      <div className="left-navigation">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-image"
        />
        <h1 className="emoji-heading">Emoji Game</h1>
      </div>
      {
         pass&&(
            <div className="right-navigation">
        <p className={"score-para"}>Score: {score}</p>
        <p className={"score-para"}>Top Score: {topscore}</p>
      </div>
        )
      }
      
    </nav>
  )
}
export default NavBar
