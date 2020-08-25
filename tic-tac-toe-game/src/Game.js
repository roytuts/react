import React from 'react';
import Board from './Board'
import './index.css';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
          <Board />
      </div>
    );
  }
}

export default Game;