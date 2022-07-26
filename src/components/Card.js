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
      cards: [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9],
    }
  }

  handleCards = () => {}

  shuffleCards =(array)=>{
	let currentIndex = array.length,  randomIndex
	while (currentIndex != 0) {
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
	  [array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]]
	}
  }

  render() {
    return (
      <>
        {this.props.isSubmitted && (
          <div className="content pt-3">
            <div className="row col-9">
			{this.shuffleCards(this.state.cards)}
              {this.state.cards.map((card) => (
                <>
                  <img
                    src={card}
                    alt="front"
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
