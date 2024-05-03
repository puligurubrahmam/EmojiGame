/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.



*/
import './index.css'
import NavBar from '../../components/NavBar'
import WinOrLoseCard from '../../components/WinOrLoseCard'
import EmojiCard from '../../components/EmojiCard'
import {Component} from 'react'
class EmojiGame extends Component {
  state = {topscore: 0, clickedEmojisList: [], play: true}
  finishGameAndSetTopScore = clickedEmojisLength => {
    const {topscore} = this.state
    let newScore = topscore
    if (clickedEmojisLength > topscore) {
      newScore = clickedEmojisLength
    }
    this.setState(prevState => {
      return {topscore: newScore, play: !prevState.play}
    })
  }
  changeToPlay = () => {
    this.setState({play: true, clickedEmojisList: []})
  }
  updating = id => {
    const {emojisList} = this.props
    const {clickedEmojisList, topscore} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length
    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }

      this.setState(prevState => {
        return {
          clickedEmojisList: [...prevState.clickedEmojisList, id],
        }
      })
    }
  }

  render() {
    const {topscore, play, clickedEmojisList} = this.state
    const {emojisList} = this.props
    const shuffledEmojisList = () => {
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const finalList = shuffledEmojisList()

    return (
      <div className="bg">
        <NavBar
          score={clickedEmojisList.length}
          topscore={topscore}
          pass={play}
        />
        <div className="innerCard">
          {play ? (
            <ul className="list-container">
              {finalList.map(eachItem => {
                return (
                  <EmojiCard
                    key={eachItem.id}
                    details={eachItem}
                    updating={this.updating}
                  />
                )
              })}
            </ul>
          ) : (
            <WinOrLoseCard
              score={clickedEmojisList.length}
              changeToPlay={this.changeToPlay}
              result={emojisList.length === clickedEmojisList.length}
            />
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
