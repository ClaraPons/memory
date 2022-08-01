import React from 'react'
import goldTrophy from '../images/trophy-gold.png'
import silverTrophy from '../images/trophy-silver.png'
import bronzeTrophy from '../images/medaille-bronze.png'
import './Score.css';


class Score extends React.Component {
  constructor() {
    super()
    this.state = {
      score: 0,
    }
  }
  refreshPage=()=> {
  window.location.reload(false);
  }
  render() {
    return (
      <>
       {this.props.endGame && this.props.level === "1" && this.props.score <= 8 && (
          <>
            <h2 className="endGame-title">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille d'or</p>
            <img src={goldTrophy} alt="" className="trophy" />
            <button className='victory' onClick={this.refreshPage}>Replay</button>
          </>
        )}
        {this.props.endGame && this.props.level === "1" && this.props.score > 8 && this.props.score <= 10 && (
          <>
            <h2 className="endGame-text">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille d'argent</p>
            <img src={silverTrophy} alt="" className="trophy" />
            <button className='victory' onClick={this.refreshPage}>Replay</button>
          </>
        )}
        {this.props.endGame && this.props.level === "1" && this.props.score > 10 && this.props.score < 14 && (
          <>
            <h2 className="endGame-text">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille de bronze</p>
            <img src={bronzeTrophy} alt="" className="trophy" />
            <button className='victory' onClick={this.refreshPage}>Replay</button>
          </>
        )}
        {this.props.endGame && this.props.level <= "2" && this.props.score >= 14 && this.props.score <= 25 && (
          <>
            <h2 className="endGame-title">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille d'or</p>
            <img src={goldTrophy} alt="" className="trophy" />
            <button className='victory' onClick={this.refreshPage}>Replay</button>
          </>
        )}
        {this.props.endGame && this.props.level <= "2" && this.props.score > 25 && this.props.score <= 30 && (
          <>
            <h2 className="endGame-text">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille d'argent</p>
            <img src={silverTrophy} alt="" className="trophy" />
            <button className='victory' onClick={this.refreshPage}>Replay</button>
          </>
        )}
        {this.props.endGame && this.props.level <= "2" && this.props.score > 30 && this.props.score < 40 && (
          <>
            <h2 className="endGame-text">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille de bronze</p>
            <img src={bronzeTrophy} alt="" className="trophy" />
            <button className='victory' onClick={this.refreshPage}>Replay</button>
          </>
        )}
        {this.props.endGame && this.props.level <= "3" && this.props.score >= 40 && this.props.score < 45 && (
          <>
            <h2 className="endGame-title">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille d'or</p>
            <img src={goldTrophy} alt="" className="trophy" />
            <button className='victory' onClick={this.refreshPage}>Replay</button>
          </>
        )}
        {this.props.endGame && this.props.level <= "3" && this.props.score >= 45 && this.props.score < 50 && (
          <>
            <h2 className="endGame-text">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille d'argent</p>
            <img src={silverTrophy} alt="" className="trophy" />
            <button className='victory' onClick={this.refreshPage}>Replay</button>
          </>
        )}
        {this.props.endGame && this.props.level <= "3" && this.props.score >= 55 && (
          <>
            <h2 className="endGame-text">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille de bronze</p>
            <img src={bronzeTrophy} alt="" className="trophy" />
            <button className='victory' onClick={this.refreshPage}>Replay</button>
          </>
        )} 
      )
      {!this.props.endGame && <h1 className='title-moves'>Moves : <span className='moves'>{this.props.score}</span></h1>}
      </>
    )
  }
}

export default Score