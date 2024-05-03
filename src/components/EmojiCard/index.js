import './index.css'
const EmojiCard = props => {
  const {details, updating} = props
  const {id, emojiName, emojiUrl} = details
  const updateScore = () => {
    updating(id)
  }
  return (
    <li className="emoji-card-container" onClick={updateScore}>
    <button className="btn1">
    <img src={emojiUrl} alt={emojiName} className="emoji-image" />
    </button>    
    </li>
  )
}
export default EmojiCard
