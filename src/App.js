// Ability to add new flash cards
// Ability to edit a flash card 
// Ability to delete a flash card
// Ability to show the flash card answer
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {cards: [
    {id: 1, question: 'Here is a question', answer: 'This is the answer'},
    {id: 2, question: 'Here is a question', answer: 'This is the answer'},
    {id: 3, question: 'Here is a question', answer: 'This is the answer'},
  ]}

  handleAddCard = (e) => {
    e.preventDefault()
    this.props.addCard(this.state.cards)
    this.setState({ cards: [] })
  }

  handleChange = (e) => {
    this.setState({ cards: e.target.value })
  }

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
      <form onSubmit={this.addCard}>
        <input 
          value={this.state.cards}
          onChange={this.handleChange}
          placeholder="Add a Question" 
        />
        <input 
          value={this.state.cards}
          onChange={this.handleChange}
          placeholder="Add an Answer" 
        />
        <button onClick={this.addCard}>Add Card</button>
      </form>
        {/* <button onClick={this.addFront}>Add The Answer</button> */}
      </div>
    );
  }
}

export default App;

{/* <form onSubmit={this.handleSubmit}>
        <input 
          value={this.state.name}
          onChange={this.handleChange}
          required 
          placeholder="Add An Item" 
        />
      </form> */}

      // class App extends Component {
      //   state = {
      //     todos: [
      //       { id: 1, name: 'Learn Rails', complete: true },
      //       { id: 2, name: 'Learn React', complete: false },
      //       { id: 3, name: 'Learn Redux', complete: false },
      //     ]}