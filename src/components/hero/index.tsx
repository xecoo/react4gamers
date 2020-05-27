import React from 'react';
import './index.css';
import { TileSize, HeadOffset, EnumDirection } from '../../settings/constants';
import useHeroMoviment from '../../hooks/useHeroMoviment/useHeroMoviment';

const initialPosition = {
  x: 3,
  y: 2
};

const Hero = () => {
  const { position, direction } = useHeroMoviment(initialPosition);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: TileSize * position.y,
        left: TileSize * position.x,
        width: TileSize,
        height: TileSize + HeadOffset,
        backgroundImage: "url(./Assets/HERO.png)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0px -${TileSize - HeadOffset}px`,
        animation: 'hero-animation 1s infinite steps(4)',
        transform: `scaleX(${direction === EnumDirection.Right ? 1 : -1})`,
        zIndex: 1
      }}
    />
  )
}

export default Hero;