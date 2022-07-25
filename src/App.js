import './App.css';
import React  from 'react';
import Card from "./components/Card";
import Score from "./components/Score";
import Player from "./components/Player"

class App extends React.Component {
  constructor(){
    super()
    this.state={
      pseudo:"",
      isSubmitted: false
    }
  }

handlePseudo =(e)=>{     
    this.setState({
        pseudo:e.target.value
    })
}

handleSubmit = (e) => {
  e.preventDefault(
    this.setState({ isSubmitted: true}, () =>{
      console.log(this.state.isSubmitted)
    })
  )
}

  render(){
  return (
    <>
    {/* <span>{this.state.pseudo}</span> */}
    <h1>Memory Game</h1>
    <Player 
      pseudo={this.state.pseudo} 
      isSubmitted={this.state.isSubmitted} 
      handlePseudo={this.handlePseudo} 
      handleSubmit={this.handleSubmit}/>
    {/* if onsubmit true { */}
     <Card isSubmitted={this.state.isSubmitted}/> 
    {/* if partie fini  */}
    {/* <Score /> */}
    </>
  );
}
}

export default App;
