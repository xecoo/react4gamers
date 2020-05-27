import React, { useState } from 'react';
import addEventListener from '@use-it/event-listener';
import { EnumDirection } from '../../settings/constants';
import { handleNextPosition } from '../../contexts/canvas/helpers';

function useHeroMoviment(initialPosition: any) {
  //hooks
  const [positionState, updatePositionState] = useState(initialPosition);
  const [directionState, updateDirectionState] = useState(EnumDirection.Right);

  addEventListener("keydown", (event: React.KeyboardEvent<HTMLDivElement>) => {
    const keyPressed = event.key as EnumDirection; //cast passando de string pra Enum
    const nextPosition = handleNextPosition(keyPressed, positionState);
    updateDirectionState(keyPressed);
    updatePositionState(nextPosition);
  });

  const returnedUseHeroMoviment = {
    position:positionState,
    direction:directionState
  };
  return returnedUseHeroMoviment
}

export default useHeroMoviment;