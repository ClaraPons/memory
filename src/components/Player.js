import React from 'react'



class Player extends React.Component {

	render() {
		return(
		<>
		{this.props.isSubmitted === false && 
         <form onSubmit={this.props.handleSubmit}>
			{this.changeBody}
			<div className='w-75'>
            <label className='fs-2 text m-3 text-light' htmlFor="Nickname">Nickname :</label>
			<input className="input-group mb-3 p-2" type="text" placeholder="Exemple : Omnivers" onChange={this.props.handlePseudo} value={this.props.pseudo} required/>
			</div>

			<label htmlFor="level"></label>
				<select id="home" className='' onChange={this.props.handleChangeLevel}>
					<option value="">Choose your level</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select> 

	    	<button className='play btn btn-success fs-2 text'>Play</button>
        </form>
		}
		</>
		)
	}
}

export default Player;