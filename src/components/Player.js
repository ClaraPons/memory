import React from 'react'

class Player extends React.Component {
	render() {
		return(
         <form>
           
            <label htmlFor="Nickname">Nickname :</label>
			<input type="text" placeholder="exemple : jad" onChange={this.props.handlePseudo} value={this.props.pseudo}/>


			{/* <label htmlFor="level">Choose your level:</label>
				<select id="home" >
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
				</select> */}

	    	<button>Play</button>

			
        </form>
		)
	}
}

export default Player;