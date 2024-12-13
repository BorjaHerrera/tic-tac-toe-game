import './disable.css';

export const disableSymbolSelection = () => {
  const chooseXButton = document.querySelector('#choose-x');
  const chooseOButton = document.querySelector('#choose-o');

  chooseXButton.classList.add('disabled');
  chooseOButton.classList.add('disabled');
};

export const enableSymbolSelection = () => {
  const chooseXButton = document.querySelector('#choose-x');
  const chooseOButton = document.querySelector('#choose-o');

  chooseXButton.classList.remove('disabled');
  chooseOButton.classList.remove('disabled');
};
