import React from 'react';
import './index.css';
import { TileSize, DemonTileSize, EnumDirection } from '../../settings/constants';
import useEnemyMoviment from '../../hooks/useEnemyMoviment/useEnemyMoviment';

const initialPosition = {
  x: 8,
  y: 8
};

const Demon = () => {

  const { position, direction } = useEnemyMoviment(initialPosition)
  return (
    <div
      style={{
        width: TileSize * 2,
        height: 100,
        backgroundImage: "url(./Assets/DEMON.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'demon-animation 1s infinite steps(4)',
        position: 'absolute',
        bottom: DemonTileSize * position.y,
        left: DemonTileSize * position.x,
        transform: `scaleX(${direction === EnumDirection.Right ? 1 : -1})`,
        zIndex: 1
      }}
    />
  )
}

export default Demon;