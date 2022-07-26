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
		{this.props.isSubmitted &&
            <h1 className='moves'>
                Moves : {this.state.score}
            </h1>
		}
		</>
		)
	}
}

export default Score;