import { checkWinner } from '../checkWinner/checkWinner';
import { isGameActive, setGameActive } from '../setGameActive/setGameActive';
import {
  playerSymbol,
  computerSymbol,
  setCurrentPlayer,
  symbolClasses
} from '../chooseSymbol/chooseSymbol';

export const playerMove = (cell) => {
  if (isGameActive() && cell.textContent === '') {
    cell.textContent = playerSymbol;

    // Remover cualquier clase anterior de símbolo
    cell.classList.remove(symbolClasses.X); // Remover clase X si está
    cell.classList.remove(symbolClasses.O); // Remover clase O si está
    // Agregar la clase correspondiente al símbolo del jugador
    cell.classList.add(symbolClasses[playerSymbol]);

    const winnerFound = checkWinner();

    if (!winnerFound) {
      setCurrentPlayer(computerSymbol);
    } else {
      setGameActive(false);
    }
  }
};