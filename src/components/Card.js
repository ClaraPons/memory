import React from 'react'

class Card extends React.Component {
	render() {
		return(
		<>
		{this.props.isSubmitted &&
         <div className='card m-4 col-6 '>
			 <h2>Hello World</h2>
        </div>
		}
		</>
		)
	}
}

export default Card;