import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import Greet from './components/greet';
import Languages from './components/language';
import Names from './components/nameinput';

class App extends Component {

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>React assessment app</p>
        </header>
        <main>
          <div className="App-main">
            <Languages/>
            <Names/>
            <Greet/>
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