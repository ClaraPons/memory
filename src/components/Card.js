import React from 'react'
import image from "../card-game.png"
const cards=[{
	src:image,
	src:image,
	src:image,
	src:image,
	src:image,
	src:image,
	src:image,
	src:image,
	src:image,
	src:image,
	src:image,
	src:image,
	src:image,
	src:image,
	src:image,
	src:image,
	src:image,
	src:image,
	src:image,
	src:image}]

class Card extends React.Component {
	render() {
		return(
		<>
		{this.props.isSubmitted &&
         <div className='content pt-3'>
				<div className='row col-10'>
					{cards.map((card)=>(
					 <img src={card.src} alt="Back front" style={{width: "8rem"}}/>
						))}
				</div>
        </div>
		}
		</>
		)
	}
}

export default Card;