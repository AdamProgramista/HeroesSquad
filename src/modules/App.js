import React, { Component } from 'react';
import './App.css';
import AllHeroes from './App__content/AllHeroes.js'
import MyHeroes from './App__content/MyHeroes.js'
import MyHeroesStats from './App__content/MyHeroesStats.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='App__header'>SuperSquad</h1>
        <div className='App__content'>
          <AllHeroes />
          <MyHeroes />
          <MyHeroesStats />
        </div>
      </div>
    );
  }
}

export default App;
