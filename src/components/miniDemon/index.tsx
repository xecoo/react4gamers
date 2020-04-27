import React from 'react';
import './index.css';
import { TileSize, HeadOffset } from '../../settings/constants';

const MiniDemon = () => {
  return (
    <div
      style={{
        width: TileSize,
        height: TileSize + HeadOffset,
        backgroundImage: "url(./Assets/MINI-DEMON.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'miniDemon-animation 1s infinite steps(4)',
        position: 'absolute',
        bottom: TileSize * 4,
        left: TileSize * 4,
        backgroundPosition: `0px -${TileSize - HeadOffset}px`,
      }} 
    />
  )
}

export default MiniDemon;