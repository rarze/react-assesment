import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import Greet from './components/greet';
import Languages from './components/language';
import Names from './components/nameinput';

const GREETINGS = {
  'english': 'Hello',
  'spanish': 'Hola',
  'italian': 'Ciao'
}

class App extends Component {
  constructor(props) {
    super(props)
    console.log(props.store.getState())
    this.state = {
      names: [],
      greeting: 'Hello',
    }
  }

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  componentWillMount() {
    this.unsubscribe = this.props.store.subscribe(
        () => this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleLanguageChange = (event) => {
    this.setState({greeting: GREETINGS[event.target.value]})
  }

  addName = (event) => {
    let newValues = event.target.value.split('\n')
    if (!!newValues) {
      this.setState({names: newValues.filter(value => value !== '')})
    }
  }

  render() {
    const { names, greeting } = this.props.store.getState()
    return (
      <div className="App">
        <header className="App-header">
          <p>React assessment app</p>
        </header>
        <main>
          <div className="App-main">
            <Languages languages={Object.keys(GREETINGS)} languageChange={this.handleLanguageChange}/>
            <Names/>
            <Greet greeting={this.state.greeting} names={names} languageChange={this.handleLanguageChange}/>
          </div>
        </main>
      </div>
    );
  }

}

App.propTypes = {
  store: PropTypes.object
}

App.childContextTypes = {
  store: PropTypes.object.isRequired
}

export default App;