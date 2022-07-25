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
    <main>
    <section className='d-flex justify-content-between mt-3'>
    <span className='fs-3 m-4 text-bg-success p-3'>{this.state.isSubmitted&&this.state.pseudo}</span>
    <h1 className='title text-light'>Memory Game</h1>
    <span></span>
    </section>
    <section className='content'>
    <Player   
      pseudo={this.state.pseudo} 
      isSubmitted={this.state.isSubmitted} 
      handlePseudo={this.handlePseudo} 
      handleSubmit={this.handleSubmit}/>
    <Card isSubmitted={this.state.isSubmitted}/> 
    {/* if partie fini  */}
    {/* <Score /> */}
    </section>
    </main>
  );
}
}

export default App;
