export const generateTime = (day: number, month: number, year: number, holidays: { date: string; type: string }[]) => {
  const selectedHoliday = holidays.find(
    (holiday) => new Date(holiday.date).getDate() === day && new Date(holiday.date).getMonth() + 1 === month
  );

  const isNationalHoliday = selectedHoliday?.type === 'NATIONAL_HOLIDAY';
  const isSunday = new Date(year, month - 1, day).getDay() === 0;
  const isObservanceHoliday = selectedHoliday?.type === 'OBSERVANCE';

  if (isSunday || isNationalHoliday || isObservanceHoliday) {
    return [];
  }

  return ['12:00', '14:00', '16:30', '18:30', '20:00'];
};
