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
      cards: [
		{front:image0,returned:false, id:0}, {front:image1,returned:false, id:1},{front:image2,returned:false, id:2}, {front:image3,returned:false, id:3},{front:image4,returned:false, id:4}, {front:image5,returned:false, id:5},{front:image6,returned:false, id:6}, {front:image7,returned:false, id:7},{front:image8,returned:false, id:8}, {front:image9,returned:false, id:9},{front:image0,returned:false, id:0}, {front:image1,returned:false, id:1},{front:image2,returned:false, id:2}, {front:image3,returned:false, id:3},{front:image4,returned:false, id:4}, {front:image5,returned:false, id:5},{front:image6,returned:false, id:6}, {front:image7,returned:false, id:7},{front:image8,returned:false, id:8}, {front:image9,returned:false, id:9}
	],
	  returned:null,
	  comparaison:[],
	  score:null,
	} 
  }
  handleCards = (index) => {
	this.setState({score:this.state.score+1})
	const cardsClone = [...this.state.cards]
	const clonedComparaison=[...this.state.comparaison,cardsClone[index]]
    cardsClone[index].returned = true
    this.setState({cards: cardsClone, returned:this.state.returned+1, comparaison:clonedComparaison})
	this.gameRules()
  }
  deleteCards=()=>{	 
	  if(this.state.comparaison.length===2 && this.state.comparaison[0].id===this.state.comparaison[1].id){
		this.setState({cards: this.state.cards.filter(card => { 
			return	 card !== this.state.comparaison[0] && card!== this.state.comparaison[1]})});
		}
	   else{
		this.setState({
			comparaison:[]
		})
	   }
  }
  gameRules = () =>{
	if(this.state.returned>1){
		this.state.cards.forEach(card => {
			card.returned=false
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