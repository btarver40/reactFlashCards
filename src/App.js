// Ability to add new flash cards
// Ability to edit a flash card 
// Ability to delete a flash card
// Ability to show the flash card answer



import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {cards: [], question: 'Here is a question', answer: 'This is the answer'}

  addCard = () => {
    this.setState(state =>{
      return {cards: state.cards, question: state.question, answer: state.answer + 1}
    })
  }

  

  // addBack = () => {
  //   this.setState(state =>{
  //     return {cardBack: state.cardBack + 1}
  //   })
  // }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Flash Cards</h1>
        </header>
        <h1>
          Start Studying Here
        </h1>
        <button onClick={this.addCard}>Add A Card</button>
        {/* <button onClick={this.addFront}>Add The Answer</button> */}
      </div>
    );
  }
}

export default App;
