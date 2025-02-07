export const getPosition = (value: number) => {
  const min = 8;
  const max = 100;
  const percentage = ((value - min) / (max - min)) * 100;
  return `calc(${percentage}% - 16px)`;
};
