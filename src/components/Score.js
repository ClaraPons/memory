import React from 'react'
import goldTrophy from '../images/trophy-gold.png'
import silverTrophy from '../images/trophy-silver.png'
import bronzeTrophy from '../images/medaille-bronze.png'

class Score extends React.Component {
  constructor() {
    super()
    this.state = {
      score: 0,
    }
  }
  render() {
    return (
      <>
        {this.props.endGame && this.props.score > 20 && this.props.score < 30 && (
          <>
            <h2 className="endGame-title">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille d'or</p>
            <img src={goldTrophy} alt="" className="trophy" />
          </>
        )}
        {this.props.endGame && this.props.score > 40 && this.props.score < 50 && (
          <>
            <h2 className="endGame-text">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille d'argent</p>
            <img src={silverTrophy} alt="" className="trophy" />
          </>
        )}
        {this.props.endGame && this.props.score > 50 && (
          <>
            <h2 className="endGame-text">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille de bronze</p>
            <img src={bronzeTrophy} alt="" className="trophy" />
          </>
        )}

        {!this.props.endGame && (
          <h1 className="moves">{`Moves : ${this.props.score}`}</h1>
        )}
      </>
    )
  }
}

export default Score
