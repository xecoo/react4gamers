import React from 'react';
import './App.css';
import Board from './board';
import { GameSize } from '../settings/constants';

function App() {
  return (
    <div className="App">
      <div
        style={{
          position: 'relative',
          width: GameSize,
          height: GameSize
        }}
      >
        <Board />
      </div>
    </div>
  );
}

export default App;