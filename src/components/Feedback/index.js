import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    display: false,
  }

  onFeedback = () => {
    const {display} = this.state
    this.setState({display: !display})
  }

  render() {
    const {display} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="container">
        {display ? (
          <div className="card-2">
            <img src={loveEmojiUrl} alt="love emoji" className="card-image" />
            <h1 className="card-heading">Thank You!</h1>
            <p className="card-para">
              We will use your feedback to improve our customer support <br />{' '}
              performace
            </p>
          </div>
        ) : (
          <div className="card">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="list-container">
              {emojis.map(each => (
                <li className="list-card" key={each.id}>
                  <img
                    src={each.imageUrl}
                    onClick={this.onFeedback}
                    alt={each.name}
                    className="image"
                  />
                  <p className="para">{each.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
