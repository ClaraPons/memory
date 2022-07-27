import React from 'react'

class Score extends React.Component {
    constructor(){
        super()
        this.state={
            score:0,
        }
    }
render() {		
    return(
		<>
        {this.props.endGame && this.props.score > 40 && this.props.score <= 45 && (
            <>
            <h2 className='endGame-title'> Bravo {this.props.pseudo} ! Vous avez terminé en {this.props.score} coups !</h2>
            <p className='endGame-text'> Vous gagnez la médaille d'or</p>
            </>
        )}
        {this.props.endGame && this.props.score > 45 && this.props.score <= 50 && (
            <>
            <h2 className='endGame-text'> Bravo {this.props.pseudo} ! Vous avez terminé en {this.props.score} coups !</h2>
            <p className='endGame-text'> Vous gagnez la médaille d'argent</p>
            </>
        )}
        {this.props.endGame && this.props.score > 50 && (
            <>
            <h2 className='endGame-text'> Bravo {this.props.pseudo} ! Vous avez terminé en {this.props.score} coups !</h2>
            <p className='endGame-text'> Vous gagnez la médaille de bronze</p>
            </>
        )}

        {!this.props.endGame && <h1 className='moves'>{`Moves : ${this.props.score}`}</h1>}
		</>
		)
	}
}

export default Score;