export const changeBgColor = (selected, other) => {
  selected.style.backgroundColor = 'var(--ttt-bg-color-1)';
  selected.style.border = `1px solid ${getComputedStyle(selected).color}`;

  other.style.backgroundColor = 'var(--ttt-bg-color-2)';
  other.style.border = '1px solid var(--ttt-bg-color)';
};
