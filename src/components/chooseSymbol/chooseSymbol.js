import './chooseSymbol.css';
import { computerMove } from '../computerMove/computerMove';
import { changeBgColor } from './changeBgColor';

let playerSymbol = 'X';
let computerSymbol = 'O';
let currentPlayer = 'X';

export const symbolClasses = {
  X: 'symbol-x',
  O: 'symbol-o'
};

export { playerSymbol };
export { computerSymbol };
export { currentPlayer };

export const getCurrentPlayer = () => currentPlayer;

export const setCurrentPlayer = (symbol) => {
  currentPlayer = symbol;
};

export const chooseSymbol = () => {
  const symbolSelection = document.querySelector('#symbol-container');
  const chooseXButton = document.querySelector('#choose-x');
  const chooseOButton = document.querySelector('#choose-o');

  chooseXButton.addEventListener('click', () => {
    playerSymbol = 'X';
    computerSymbol = 'O';
    currentPlayer = 'X';

    changeBgColor(chooseXButton, chooseOButton);
  });

  chooseOButton.addEventListener('click', () => {
    playerSymbol = 'O';
    computerSymbol = 'X';
    currentPlayer = 'X';

    changeBgColor(chooseOButton, chooseXButton);

    const cells = document.querySelectorAll('.cell');
    computerMove(cells);
  });
};
