export const getPosition = (value: number) => {
  const min = 8;
  const max = 100;
  const percentage = ((value - min) / (max - min)) * 100;
  const offset = 10 - value / 6;
  return `calc(${percentage}% + ${offset}px)`;
};
