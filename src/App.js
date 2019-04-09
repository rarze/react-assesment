import React, { Component } from 'react';
import './App.css';
import Greet from './components/greet';
import Languages from './components/language';
import Names from './components/nameinput'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      names: [],
      languages: ['english', 'spanish', 'italian'],
      greetings: {
        'english': 'Hello',
        'spanish': 'Hola',
        'italian': 'Ciao'
      },
      currentGreeting: 'Hello',
      currentLanguage: 'english'
    }
    this.handleLanguageChange = this.handleLanguageChange.bind(this)
    this.addName = this.addName.bind(this)
  }

  handleLanguageChange(event) {
    this.setState({currentLanguage: event.target.value, currentGreeting: this.state.greetings[event.target.value]})
  }

  addName(event) {
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
            <Languages languages={this.state.languages} languageChange={this.handleLanguageChange}/>
            <Names addName={this.addName}/>
            <Greet greeting={this.state.currentGreeting} names={this.state.names} languageChange={this.handleLanguageChange}/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
