export const resetSymbolSelection = () => {
  const chooseXButton = document.querySelector('#choose-x');
  const chooseOButton = document.querySelector('#choose-o');

  chooseXButton.style.backgroundColor = 'var(--ttt-bg-color-2)';
  chooseXButton.style.border = '1px solid var(--ttt-bg-color)';

  chooseOButton.style.backgroundColor = 'var(--ttt-bg-color-2)';
  chooseOButton.style.border = '1px solid var(--ttt-bg-color)';
};
