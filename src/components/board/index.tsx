import React from 'react';
import Hero from '../hero';
import { GameSize } from '../../settings/constants';
import MiniDemon from '../miniDemon';
import Demon from '../demon';
import Chest from '../chest';
import Trap from '../trap';

const Board = () => {
  return (
    <div>
      <Hero />
      <MiniDemon/>
      <Demon/>
      <Chest/>
      <Trap/>
      <img
        src='./Assets/tileset.gif'
        alt="board floor"
        width={GameSize}
        height={GameSize}
      />
    </div>

  )
}

export default Board;