import React from 'react'

class Player extends React.Component {
	render() {
		return(
		<>
		{this.props.isSubmitted === false && 
         <form onSubmit={this.props.handleSubmit}>
			<div className='w-75'>
            <label className='fs-2 text m-3 text-light' htmlFor="Nickname">Nickname :</label>
			<input className="input-group mb-3 p-2" type="text" placeholder="Exemple : Omnivers" onChange={this.props.handlePseudo} value={this.props.pseudo} required/>
			</div>

			{/* <label htmlFor="level">Choose your level:</label>
				<select id="home" >
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
				</select> */}

	    	<button className='play btn btn-outline-success p-3 fs-2 text'>Play</button>

			
        </form>
		}
		</>
		)
	}
}

export default Player;