import React from 'react'
import image from "../card-game.png"

class Card extends React.Component {
	render() {
		return(
		<>
		{this.props.isSubmitted &&
         <div className='content pt-3'>
				<div className='row col-10'>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
					<img src={image} alt='Back' style={{width: "8rem"}}/>
				</div>
        </div>
		}
		</>
		)
	}
}

export default Card;