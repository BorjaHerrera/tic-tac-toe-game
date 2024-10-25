import './resultMessage.css';
import { setGameActive } from '../setGameActive/setGameActive';

export const printMessage = (message) => {
  const winnerMessage = document.createElement('div');
  winnerMessage.id = 'winnerMessage';

  winnerMessage.textContent = message;
  document.body.appendChild(winnerMessage);
  setGameActive(false);
  return true;
};
