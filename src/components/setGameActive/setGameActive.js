let gameActive = true;

export const setGameActive = (state) => {
  gameActive = state;
};

export const isGameActive = () => gameActive;
