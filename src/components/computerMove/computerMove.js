import { checkWinner, winningCombinations } from '../checkWinner/checkWinner';
import {
  playerSymbol,
  computerSymbol,
  setCurrentPlayer,
  symbolClasses
} from '../chooseSymbol/chooseSymbol';

export const computerMove = (cells) => {
  setTimeout(() => {
    const checkAndMove = (symbol, moveSymbol) => {
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;

        if (
          cells[a].textContent === symbol &&
          cells[b].textContent === symbol &&
          !cells[c].textContent
        ) {
          cells[c].textContent = moveSymbol;
          cells[c].classList.remove(symbolClasses.X); // Remover clase X si está
          cells[c].classList.remove(symbolClasses.O); // Remover clase O si está
          cells[c].classList.add(symbolClasses[moveSymbol]);
          return true;
        }
        if (
          cells[a].textContent === symbol &&
          cells[c].textContent === symbol &&
          !cells[b].textContent
        ) {
          cells[b].textContent = moveSymbol;
          cells[b].classList.remove(symbolClasses.X); // Remover clase X si está
          cells[b].classList.remove(symbolClasses.O); // Remover clase O si está
          cells[b].classList.add(symbolClasses[moveSymbol]);
          return true;
        }
        if (
          cells[b].textContent === symbol &&
          cells[c].textContent === symbol &&
          !cells[a].textContent
        ) {
          cells[a].textContent = moveSymbol;
          cells[a].classList.remove(symbolClasses.X); // Remover clase X si está
          cells[a].classList.remove(symbolClasses.O); // Remover clase O si está
          cells[a].classList.add(symbolClasses[moveSymbol]);
          return true;
        }
      }
      return false;
    };

    if (checkAndMove(computerSymbol, computerSymbol)) {
      checkWinner();
      setCurrentPlayer(playerSymbol);
      return;
    }

    if (checkAndMove(playerSymbol, computerSymbol)) {
      checkWinner();
      setCurrentPlayer(playerSymbol);
      return;
    }

    if (!cells[4].textContent) {
      cells[4].textContent = computerSymbol;
      cells[4].classList.remove(symbolClasses.X); // Remover clase X si está
      cells[4].classList.remove(symbolClasses.O); // Remover clase O si está
      cells[4].classList.add(symbolClasses[computerSymbol]);
      checkWinner();
      setCurrentPlayer(playerSymbol);
      return;
    }

    const corners = [0, 2, 6, 8];
    for (const corner of corners) {
      if (!cells[corner].textContent) {
        cells[corner].textContent = computerSymbol;
        cells[corner].classList.remove(symbolClasses.X); // Remover clase X si está
        cells[corner].classList.remove(symbolClasses.O); // Remover clase O si está
        cells[corner].classList.add(symbolClasses[computerSymbol]);
        checkWinner();
        setCurrentPlayer(playerSymbol);
        return;
      }
    }

    const sides = [1, 3, 5, 7];
    for (const side of sides) {
      if (!cells[side].textContent) {
        cells[side].textContent = computerSymbol;
        cells[side].classList.remove(symbolClasses.X); // Remover clase X si está
        cells[side].classList.remove(symbolClasses.O); // Remover clase O si está
        cells[side].classList.add(symbolClasses[computerSymbol]);
        checkWinner();
        setCurrentPlayer(playerSymbol);
        return;
      }
    }
  }, 500);
};
