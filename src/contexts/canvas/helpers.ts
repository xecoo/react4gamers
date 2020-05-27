import { EnumDirection } from "../../settings/constants";

export function handleNextPosition(direction: EnumDirection, position: { x: number; y: number; }) {

  switch (direction) {
    case EnumDirection.Left:
      const newPositionLeft = {
        x: position.x - 1,
        y: position.y
      };
      return newPositionLeft;
    case EnumDirection.Right:
      const newPositionRight = {
        x: position.x + 1,
        y: position.y
      };
      return newPositionRight;
    case EnumDirection.Up:
      const newPositionUp = {
        x: position.x,
        y: position.y + 1
      };
      return newPositionUp;
    case EnumDirection.Down:
      const newPositionDown = {
        x: position.x,
        y: position.y - 1
      };
      return newPositionDown;
    default:
      break;
  }

}
