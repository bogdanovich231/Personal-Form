export const getFirstDayOfMonth = (month: number, year: number) => {
  const date = new Date(year, month - 1, 1); 
  return date.getDay(); 
};

export const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};
