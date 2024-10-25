import { printResetButton } from '../printResetButton/printResetButton';
import { printMessage } from '../resultMessage/resultMessage';

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export { winningCombinations };

export const checkWinner = () => {
  const cells = document.querySelectorAll('.cell');

  const previousMessage = document.querySelector('#winnerMessage');
  if (previousMessage) {
    previousMessage.remove();
  }

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;

    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[b].textContent === cells[c].textContent
    ) {
      setTimeout(() => {
        printMessage(`${cells[a].textContent} wins!`);
        printResetButton();
      }, 600);
      return true;
    }
  }

  const isDraw = [...cells].every((cell) => cell.textContent);
  if (isDraw) {
    setTimeout(() => {
      printMessage('Draw');
      printResetButton();
    }, 600);
    return true;
  }

  return false;
};
