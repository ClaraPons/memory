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
    }
  }
  handlePseudo =(e)=>{     
    this.setState({
        pseudo:e.target.value
    })
}
  render(){
  return (
    <>
    {/* <span>{this.state.pseudo}</span> */}
    <h1>Memory Game</h1>
    <Player pseudo={this.state.pseudo} handlePseudo={this.handlePseudo} />
    {/* if onsubmit true { */}
    {/* <Card /> */}
    {/* if partie fini  */}
    {/* <Score /> */}
    </>
  );
}
}

export default App;
