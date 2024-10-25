import { computerMove } from '../computerMove/computerMove';
import { playerMove } from '../playerMove/playerMove';
import { isGameActive } from '../setGameActive/setGameActive';

export const handleCellClick = (cell, i, cells) => {
  if (isGameActive()) {
    playerMove(cell, i);

    if (isGameActive()) {
      computerMove(cells);
    }
  }
};
