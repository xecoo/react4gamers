import React from 'react';
import Hero from '../hero';
import { GameSize } from '../../settings/constants';

const Board = () => {
  return (
    <div>
      <Hero />
      <img
        src="./assets/tileset.gif"
        alt="board floor"
        width={GameSize}
        height={GameSize}
      />
    </div>

  )
}

export default Board;