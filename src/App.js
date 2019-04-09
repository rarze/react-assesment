import React, { Component } from 'react';
import './App.css';
import Greet from './components/greet';
import Languages from './components/language';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
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
            <Languages/>
            <Greet names={this.state.names}/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
