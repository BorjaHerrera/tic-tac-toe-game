import { resetGame } from '../resetGame/resetGame';
import './printResetButton.css';

export const printResetButton = () => {
  const winnerMessage = document.querySelector('#winnerMessage');

  const resetButton = document.createElement('button');
  resetButton.className = 'reset-button';
  resetButton.textContent = 'RESET GAME';

  winnerMessage.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
};
