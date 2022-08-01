import React from 'react'
import Score from './Score'
import './Cards.css'
import image from '../images/card-game.png'
import image0 from '../images/js.png'
import image1 from '../images/NODE.png'
import image2 from '../images/pixel1.png'
import image3 from '../images/pixel2.png'
import image4 from '../images/pixel3.png'
import image5 from '../images/pixel4.png'
import image6 from '../images/bootstrap.png'
import image7 from '../images/pixel5.png'
import image8 from '../images/REACT.png'
import image9 from '../images/Logo_Konexio.png'
import image10 from '../images/motivation.png'
import { shuffle } from 'lodash'

const cards = shuffle([  
  { front: image0, returned: false, id: 0, level:"1" },
  { front: image1, returned: false, id: 1, level:"1"},
  { front: image2, returned: false, id: 2, level:"1" },
  { front: image3, returned: false, id: 3, level:"2" },
  { front: image4, returned: false, id: 4, level:"2" },
  { front: image5, returned: false, id: 5, level:"2"},
  { front: image6, returned: false, id: 6, level:"2" }, 
  { front: image7, returned: false, id: 7, level:"3" },
  { front: image8, returned: false, id: 8, level:"3" },
  { front: image9, returned: false, id: 9, level:"3" },
  { front: image0, returned: false, id: 0, level:"1" },
  { front: image1, returned: false, id: 1, level:"1" },
  { front: image2, returned: false, id: 2, level:"1" },
  { front: image3, returned: false, id: 3, level:"2" },
  { front: image4, returned: false, id: 4, level:"2" },
  { front: image5, returned: false, id: 5, level:"2" },
  { front: image6, returned: false, id: 6, level:"2" },
  { front: image7, returned: false, id: 7, level:"3" },
  { front: image8, returned: false, id: 8, level:"3" },
  { front: image9, returned: false, id: 9, level:"3" },])

class Card extends React.Component {
  constructor() {
    super()
    this.state = {
      cards:[],
      front: image10,
      returned: null,
      comparaison: [],
      score: 0,
      shuffled: false,
    }
  }

  componentDidMount () {
    this.filterCards()
  }

  handleCards = (index) => {
    const cardsClone = [...this.state.cards]
    const clonedComparaison = [...this.state.comparaison, cardsClone[index]]
    cardsClone[index].returned = true
    this.setState({
      cards: cardsClone,
      returned: this.state.returned + 1,
      comparaison: clonedComparaison,
      score: this.state.score + 1,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    this.gameRules()
    console.log(prevProps)
    if(this.props.level !== prevProps.level){
      this.filterCards()
    }
  }

  
  deleteCards = () => {
    if (
      this.state.comparaison.length === 2 &&
      this.state.comparaison[0].id === this.state.comparaison[1].id
    ) {
      setTimeout(() => {
        this.setState({
          cards: this.state.cards.filter((card) => {
            return (
              card !== this.state.comparaison[0] &&
              card !== this.state.comparaison[1]
            )
          }),
        })
      }, 500)
    } else if (this.state.cards.length === 2) {
      this.setState({
        cards:[],
        endGame: true
      })
    } else {
      this.setState({
        comparaison: [],
      })
    }
  }
  gameRules = () => {
    if (this.state.returned === 2) {
      setTimeout(() => {
        this.state.cards.forEach((card) => {
          card.returned = false
        })
      }, 300)
      this.setState({
        returned: null,
      })
      this.deleteCards()
    }
  }
  // shuffleCards = (array) => {
  //   this.setState({ shuffled: true })
  //   let currentIndex = array.length,
  //     randomIndex
  //   while (currentIndex !== 0) {
  //     randomIndex = Math.floor(Math.random() * currentIndex)
  //     currentIndex--
  //     ;[array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex],
  //       array[currentIndex],
  //     ]
  //   }
  // }

  filterCards = () => {
    const filterCards = cards.filter((card) => {
      return card.level <= this.props.level
    })

    this.setState({
      cards: filterCards
    })
  }

  render() {  

    return (
      <>
        {!this.state.endGame && this.props.isSubmitted && (
          <div className="content pt-3">
            <div className="container">
              {this.state.cards.map((card, index) => (
                <>
                  {card.returned ? (
                    <img
                      key={index}
                      className="m-1 border rounded-3 front bg-white"
                      src={card.front}
                      alt="back"
                      style={{ width: '7rem',height:'9rem' }}
                    />
                  ) : (
                    <img
                      key={index}
                      className="m-1 back"
                      src={image}
                      alt="back"
                      style={{ width: '7rem',height:'9rem' }}
                      onClick={() => this.handleCards(index)}
                    />
                  )}
                </>
              ))}
            </div>
          </div>
        )}
        <Score
          score={this.state.score}
          endGame={this.state.endGame}
          pseudo={this.props.pseudo}
          level={this.props.level}
        />
      </>
    )
  }
}

export default Card
