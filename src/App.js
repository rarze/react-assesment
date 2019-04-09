import React, { Component } from 'react';
import './App.css';
import Greet from './components/greet';
import Languages from './components/language';
import Names from './components/nameinput'
const GREETINGS = {
  'english': 'Hello',
  'spanish': 'Hola',
  'italian': 'Ciao'
}
const LANGUAGES = ['english', 'spanish', 'italian']
class App extends Component {
  constructor() {
    super()
    this.state = {
      names: [],
      currentGreeting: 'Hello',
      currentLanguage: 'english'
    }
  }

  handleLanguageChange = (event) => {
    this.setState({currentLanguage: event.target.value, currentGreeting: GREETINGS[event.target.value]})
  }

  addName = (event) => {
    let newValues = event.target.value.split('\n')
    if (!!newValues) {
      this.setState({names: newValues.filter(value => value !== '')})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>React assessment app</p>
        </header>
        <main>
          <div className="App-main">
            <Languages languages={LANGUAGES} languageChange={this.handleLanguageChange}/>
            <Names addName={this.addName}/>
            <Greet greeting={this.state.currentGreeting} names={this.state.names} languageChange={this.handleLanguageChange}/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;