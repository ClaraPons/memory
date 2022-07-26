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
            <h1 className='moves'>{`Moves : ${this.props.score}`}</h1>
		</>
		)
	}
}

export default Score;