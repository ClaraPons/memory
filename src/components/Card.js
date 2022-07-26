import React from 'react'
import image from '../images/card-game.png'
import image0 from '../images/js.png'
import image1 from '../images/NODE.png'
import image2 from '../images/benoit-pic.png'
import image3 from '../images/julie-pic.png'
import image4 from '../images/milk.jpeg'
import image5 from '../images/oldman.png'
import image6 from '../images/bootstrap.png'
import image7 from '../images/gigachad-meme.png'
import image8 from '../images/REACT.png'
import image9 from '../images/pixelart.png'

class Card extends React.Component {
  constructor() {
    super()
    this.state = {
      cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
	  images: [{image0}]
    }
  }

  handleCards = () => {}

  render() {
    return (
      <>
        {this.props.isSubmitted && (
          <div className="content pt-3">
            <div className="row col-9">
              {this.state.cards.map((card, i) => (
                <>
                  {console.log(`${'image'}${i}`)}
                  <img
                    src={`${card}${i}`}
                    alt="Back"
                    style={{ width: '8rem' }}
                    onClick={this.handleCards}
                  />
                </>
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Card
