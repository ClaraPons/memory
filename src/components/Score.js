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

{this.props.score === null ? (
  <h1 className='moves'>Moves : 0</h1>
) : (
  <h1 className='moves'>{`Moves : ${this.props.score}`}</h1>
)}
		</>
		)
	}
}

export default Score;