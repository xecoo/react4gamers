import React from 'react';
import './index.css';
import { TileSize, DemonTileSize } from '../../settings/constants';

const Demon = () => {
  return (
    <div
      style={{
        width: TileSize * 2,
        height: 100,
        backgroundImage: "url(./Assets/DEMON.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'demon-animation 1s infinite steps(4)',
        position: 'absolute',
        bottom: DemonTileSize * 6,
        left: DemonTileSize * 6,
      }} 
    />
  )
}

export default Demon;