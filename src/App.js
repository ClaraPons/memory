import './App.css';
import React  from 'react';
import Card from "./components/Card";
import Player from "./components/Player";
import background from "./images/background2.jpg"

class App extends React.Component {
  constructor(){
    super()
    this.state={
      pseudo:"",
      isSubmitted: false,
      level:1,
    }
  }
handlePseudo =(e)=>{     
    this.setState({
        pseudo:e.target.value
    })
}
handleSubmit = (e) => {
  e.preventDefault()
    this.setState({ isSubmitted: true})
    this.changeBodyBackground()
}
changeBodyBackground=()=>{
  document.body.style.backgroundImage = `url(${background})`;
}

// handleChangeLevel = (e) =>{
//  this.setState({
//    level:e.target.value
//  })
 
// }

  render(){
    console.log(this.state.level)
  return (
    <main>
    <section className='d-flex align-items-center mt-3'>
    <span className='fs-3 m-4 text-bg-success p-3'>{this.state.isSubmitted&&this.state.pseudo}</span>
    <h1 className='title text-light'>Memory Game</h1>
    </section>

    <Player   
      pseudo={this.state.pseudo} 
      isSubmitted={this.state.isSubmitted} 
      handlePseudo={this.handlePseudo} 
      handleSubmit={this.handleSubmit}
      level={this.state.level}
      handleChangeLevel={this.handleChangeLevel}
      />
    {/* {<main class="container">
        for(let i=0;i<5;i++){
            <section class="row">
            for(let i=0;i<4;i++){
                <div class="card test" style="width: 10rem;">
                    <img src="./2bw1030.jpg" class="card-img-top" alt="...">
                </div>
            }
            </section>
        }        
    </main>} */}
    <Card isSubmitted={this.state.isSubmitted} pseudo={this.state.pseudo} />
    </main>
  );
}
}

export default App;
