import React, { useState } from 'react';
import addEventListener from '@use-it/event-listener';
import './index.css';
import { TileSize, HeadOffset } from '../../settings/constants';

const initialPosition = {
  x: 3,
  y: 2
};

const Hero = () => {
  //hooks
  const [positionState, updatePositionState] = useState(initialPosition);
  const [directionState, updateDirectionState] = useState("Right");

  addEventListener("keydown", (event: any) => {
    const keyPressed = event.key;
    switch (keyPressed) {
      case "ArrowLeft":
        const newPositionLeft = {
          x: positionState.x - 1,
          y: positionState.y
        };
        updatePositionState(newPositionLeft);
        updateDirectionState('Left');
        break;
      case "ArrowRight":
        const newPositionRight = {
          x: positionState.x + 1,
          y: positionState.y
        };
        updatePositionState(newPositionRight);
        updateDirectionState('Right');
        break;
      case "ArrowUp":
        const newPositionUp = {
          x: positionState.x,
          y: positionState.y + 1
        };
        updatePositionState(newPositionUp);
        break;
      case "ArrowDown":
        const newPositionDown = {
          x: positionState.x,
          y: positionState.y - 1
        };
        updatePositionState(newPositionDown);
        break;
      default:
        break;
    }
  });

  // setTimeout(() => {
  //   const newPosition = { x: 16, y: 15 };
  //   updatePositionState(newPosition);
  // }, 3000);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: TileSize * positionState.y,
        left: TileSize * positionState.x,
        width: TileSize,
        height: TileSize + HeadOffset,
        backgroundImage: "url(./Assets/HERO.png)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0px -${TileSize - HeadOffset}px`,
        animation: 'hero-animation 1s infinite steps(4)',
        transform:`scaleX(${directionState === "Right"? 1 : -1})`
      }}
    />
  )
}

export default Hero;