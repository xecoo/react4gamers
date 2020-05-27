import React, { useState } from 'react';
import useInterval from '@use-it/interval';
import { EnumDirection } from '../../settings/constants';
import { handleNextPosition } from '../../contexts/canvas/helpers';

function useEnemyMoviment(initialPosition: any) {
  //hooks
  const [positionState, updatePositionState] = useState(initialPosition);
  const [directionState, updateDirectionState] = useState(EnumDirection.Right);

  useInterval(function move() {
    const directions = Object.values(EnumDirection);
    const random = Math.floor(Math.random() * 4);
    const randomDirection = directions[random];
    
    const nextPosition = handleNextPosition(randomDirection,positionState);
    updateDirectionState(randomDirection);
    updatePositionState(nextPosition);
  }, 2000);

  const returnedUseHeroMoviment = {
    position: positionState,
    direction: directionState
  };
  return returnedUseHeroMoviment
}

export default useEnemyMoviment;