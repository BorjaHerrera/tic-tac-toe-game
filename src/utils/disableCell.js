import './disable.css';

export const disableCellClicks = (cells) => {
  for (const cell of cells) {
    cell.classList.add('disabled');
  }
};

export const enableCellClicks = (cells) => {
  for (const cell of cells) {
    cell.classList.remove('disabled');
  }
};
