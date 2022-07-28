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
  refreshPage=()=> {
  window.location.reload();
  }
  render() {
    return (
      <>
      {this.props.endGame && this.props.level === "1" && this.props.score > 6 && this.props.score < 9 && (
          <>
            <h2 className="endGame-title">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille d'or</p>
            <img src={goldTrophy} alt="" className="trophy" />
            <button className='btn btn-success p-3 fs-2 text' onClick={this.refreshPage}>Replay</button>
          </>
        )}
         {this.props.endGame && this.props.level === "1" && this.props.score >= 9 && this.props.score < 12 && (
          <>
             <h2 className="endGame-text">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille d'argent</p>
            <img src={silverTrophy} alt="" className="trophy" />
            <button className='btn btn-success p-3 fs-2 text' onClick={this.refreshPage}>Replay</button>
          </>
        )}
         {this.props.endGame && this.props.level === "1" && this.props.score >= 12 && this.props.score < 20  (
          <>
            <h2 className="endGame-text">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille de bronze</p>
            <img src={bronzeTrophy} alt="" className="trophy" />
            <button className='btn btn-success p-3 fs-2 text' onClick={this.refreshPage}>Replay</button>
          </>
        )}
         {this.props.endGame && this.props.level !== "1" && this.props.score > 20 && this.props.score < 25 && (
          <>
            <h2 className="endGame-title">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille d'or</p>
            <img src={goldTrophy} alt="" className="trophy" />
            <button className='btn btn-success p-3 fs-2 text' onClick={this.refreshPage}>Replay</button>
          </>
        )}
          {this.props.endGame && this.props.level !== "1" && this.props.score >= 25 && this.props.score < 30 && (
          <>
             <h2 className="endGame-text">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille d'argent</p>
            <img src={silverTrophy} alt="" className="trophy" />
            <button className='btn btn-success p-3 fs-2 text' onClick={this.refreshPage}>Replay</button>
          </>
        )}
          {this.props.endGame && this.props.level !== "3" && this.props.score > 30 && this.props.score <= 50(
          <>
           <h2 className="endGame-text">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille de bronze</p>
            <img src={bronzeTrophy} alt="" className="trophy" />
            <button className='btn btn-success p-3 fs-2 text' onClick={this.refreshPage}>Replay</button>
          </>
        )}
        {this.props.endGame && this.props.level !== "1" && this.props.level !== "2" && this.props.score >= 40 && this.props.score < 45 && (
          <>
            <h2 className="endGame-title">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille d'or</p>
            <img src={goldTrophy} alt="" className="trophy" />
            <button className='btn btn-success p-3 fs-2 text' onClick={this.refreshPage}>Replay</button>
          </>
        )}
        {this.props.endGame && this.props.level !== "2"  &&this.props.score > 45 && this.props.score < 55 && (
          <>
            <h2 className="endGame-text">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille d'argent</p>
            <img src={silverTrophy} alt="" className="trophy" />
            <button className='btn btn-success p-3 fs-2 text' onClick={this.refreshPage}>Replay</button>
          </>
        )}
        {this.props.endGame && this.props.level !== "2" && this.props.score > 55 && (
          <>
            <h2 className="endGame-text">
              {' '}
              Bravo {this.props.pseudo} ! Vous avez terminé en{' '}
              {this.props.score} coups !
            </h2>
            <p className="endGame-text"> Vous gagnez la médaille de bronze</p>
            <img src={bronzeTrophy} alt="" className="trophy" />
            <button className='btn btn-success p-3 fs-2 text' onClick={this.refreshPage}>Replay</button>
          </>
        )}

        {!this.props.endGame && <h1 className='title-moves'>Moves : <span className='moves'>{this.props.score}</span></h1>}
      </>
    )
  }
}

export default Score
