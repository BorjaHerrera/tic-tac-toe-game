import './board.css';
import { isGameActive } from '../setGameActive/setGameActive';
import { playerMove } from '../playerMove/playerMove';
import { computerMove } from '../computerMove/computerMove';

const cells = [];

export { cells };

export const board = () => {
  const boardElement = document.querySelector('#board');

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.index = i;

    cell.addEventListener('click', () => {
      if (isGameActive() && cell.textContent === '') {
        playerMove(cell, i);

        if (isGameActive()) {
          computerMove(cells);
        }
      }
    });
    boardElement.appendChild(cell);
    cells.push(cell);
  }
};
