import React from 'react';
import './index.css';
import { TileSize } from '../../settings/constants';

const Trap = () => {
  return (
    <div
      style={{
        width: TileSize,
        height: 100,
        backgroundImage: "url(./Assets/TRAP.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'trap-animation 1s infinite steps(8)',
        position: 'absolute',
        bottom: TileSize * 3,
        left: TileSize * 3,
      }} 
    />
  )
}

export default Trap;