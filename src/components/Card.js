import React from 'react'
import image from "../images/card-game.png"

class Card extends React.Component {
	constructor(){
		super()
		this.state={
		  cards:[1,2,3,4,5,6,7,8,9,10]
		}
	  }
	handleCards = () => {
	}

	render() {
		return(
		<>
		{this.props.isSubmitted &&
         <div className='content pt-3'>
				<div className='row col-9'>
				{this.state.cards.map((card) =>
					<img src={image} alt='Back' style={{width: "8rem"}} onClick={this.handleCards}/>
				)}
				</div>
        </div>
		}
		</>
		)
	}
}

export default Card;