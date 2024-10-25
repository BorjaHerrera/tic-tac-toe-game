import { board } from './src/components/board/board';
import { checkWinner } from './src/components/checkWinner/checkWinner';
import { chooseSymbol } from './src/components/chooseSymbol/chooseSymbol';
import './style.css';

const divApp = document.querySelector('#app');

divApp.innerHTML = `
<main id="main">
  <div id="symbol-container">
    <button id="choose-x">X</button>
    <button id="choose-o">O</button>
  </div>
  <div id="board"></div>
</main>
`;
board();
chooseSymbol();
checkWinner();
