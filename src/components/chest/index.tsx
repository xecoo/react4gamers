import React from 'react';
import './index.css';
import { TileSize } from '../../settings/constants';

const Chest = () => {
  return (
    <div
      style={{
        width: TileSize,
        height: 100,
        backgroundImage: "url(./Assets/CHEST.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'chest-animation 1s infinite steps(3)',
        position: 'absolute',
        bottom: TileSize * 5,
        left: TileSize * 5,
      }} 
    />
  )
}

export default Chest;