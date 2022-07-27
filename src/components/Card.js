import React from 'react'
import Score from "./Score";
import image from '../images/card-game.png'
import image0 from '../images/js.png'
import image1 from '../images/NODE.png'
import image2 from '../images/benoit-pic.png'
import image3 from '../images/julie-pic.png'
import image4 from '../images/milk.png'
import image5 from '../images/oldman.png'
import image6 from '../images/bootstrap.png'
import image7 from '../images/gigachad-meme.png'
import image8 from '../images/REACT.png'
import image9 from '../images/pixelart.png'

class Card extends React.Component {
  constructor() {
    super()
    this.state = {
      cards: [{front:image0,returned:false}, {front:image1,returned:false},{front:image2,returned:false}, {front:image3,returned:false},{front:image4,returned:false}, {front:image5,returned:false},{front:image6,returned:false}, {front:image7,returned:false},{front:image8,returned:false}, {front:image9,returned:false},{front:image0,returned:false}, {front:image1,returned:false},{front:image2,returned:false}, {front:image3,returned:false},{front:image4,returned:false}, {front:image5,returned:false},{front:image6,returned:false}, {front:image7,returned:false},{front:image8,returned:false}, {front:image9,returned:false}],
	    returned:[],
	}
  }
  handleCards = (index) => {
	  const cardClone = [...this.state.cards]
    cardClone[index].returned = true
    this.setState({cards: cardClone, returned:this.state.returned+1})
	this.gameRules()
  }


  deleteCards=()=>{	 
    console.log(this.state.comparaison[0], this.state.comparaison[1])
    if(this.state.comparaison[0].id===this.state.comparaison[1].id){
    this.setState({cards: this.state.cards.filter(card => { 
      return	 card !== this.state.comparaison[0] && card!== this.state.comparaison[1]})});
    }
     else if (this.state.comparaison.length > 1){
       console.log("on est ici")
    this.setState({
      comparaison:[]
    })
     }
  }
  gameRules = (i) =>{
  if(this.state.returned>0){
    this.state.cards.forEach(card => {
    setTimeout(function(i){
      card.returned=false
    },i * 1000)
    });
    this.setState({
      returned:null,
    })
    this.deleteCards()
  }
  }
  shuffleCards =(array)=>{
	let currentIndex = array.length,  randomIndex;
	while (currentIndex !== 0) {
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
	  [array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}
  }

  render() {
    return (
      <>
        {this.props.isSubmitted && (
          <div className="content pt-3">
            <div className="row col-11 d-flex justify-content-center">
			{/* {this.shuffleCards(this.state.cards)} */}
              {this.state.cards.map((card,index) => (
                <>
				{card.returned ?( 
                  <img key={index}
				  	className='m-1 border rounded-3'
                    src={card.front}
                    alt="back"
                    style={{ width: '7rem'}}
                  />
				  ):(
				  <img key={index}
				  	className='m-1'
                    src={image}
                    alt="back"
                    style={{ width: '8rem'}}
                    onClick={()=>this.handleCards(index)}
                  />
				)} 
                </>
              ))}
            </div>
          </div>
        )}
		<Score score={this.state.score} />
      </>
    )
}
}


export default Card

