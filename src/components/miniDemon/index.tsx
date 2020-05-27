import React from 'react';
import './index.css';
import { TileSize, HeadOffset, EnumDirection } from '../../settings/constants';
import useEnemyMoviment from '../../hooks/useEnemyMoviment/useEnemyMoviment';

const initialPosition = {
  x: 5,
  y: 5
};

const MiniDemon = () => {

  const { position, direction } = useEnemyMoviment(initialPosition);

  return (
    <div
      style={{
        width: TileSize,
        height: TileSize + HeadOffset,
        backgroundImage: "url(./Assets/MINI-DEMON.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'miniDemon-animation 1s infinite steps(4)',
        position: 'absolute',
        bottom: TileSize * position.y,
        left: TileSize * position.x,
        backgroundPosition: `0px -${TileSize - HeadOffset}px`,
        transform: `scaleX(${direction === EnumDirection.Right ? 1 : -1})`,
        zIndex: 1
      }}
    />
  )
}

export default MiniDemon;