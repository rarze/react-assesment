import React from 'react'
import { LanguageDropdown, Greetings, NamesInput } from "./components/containers";
import './App.css';

const App = () =>
  <div className="App">
    <header className="App-header">
      <p>React assessment app</p>
    </header>
    <main>
      <div className="App-main">
        <LanguageDropdown />
        <NamesInput />
        <Greetings />
      </div>
    </main>
  </div>

export default App