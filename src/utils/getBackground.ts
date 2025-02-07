export const getBackground = (value: number) => {
  const percentage = ((value - 8) / (100 - 8)) * 100;
  return `linear-gradient(to right, #761BE4 ${percentage}%, #CBB6E5 ${percentage}%)`;
};
