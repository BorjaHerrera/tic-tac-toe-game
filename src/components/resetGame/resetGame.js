import { enableSymbolSelection } from '../../utils/disableSymbol';
import { cells } from '../board/board';
import { resetSymbolSelection } from '../resetSymbolSelection/resetSymbolSelection';
import { setGameActive } from '../setGameActive/setGameActive';

export const resetGame = () => {
  for (const cell of cells) {
    cell.textContent = '';
    winnerMessage.textContent = '';
    winnerMessage.style.display = 'none';
  }
  setGameActive(true);
  resetSymbolSelection();
  enableSymbolSelection();
};
