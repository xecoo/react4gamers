import React from 'react';
import './index.css';
import { TileSize } from '../../settings/constants';

const Hero = () => {
  return (
    <div
      style={{
        width: TileSize,
        height: 100,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'hero-animation 1s infinite steps(4)',
        position:'absolute',
        bottom: 48 * 2,
        left:48 * 2,
      }} />
  )
}

export default Hero;