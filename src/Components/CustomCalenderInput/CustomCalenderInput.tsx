import { useEffect, useState } from 'react';
import { getDaysInMonth, getFirstDayOfMonth } from '../../utils/getDate';
import './CustomCalenderInput.css';
import { fetchHolidays } from '../../utils/api/holidaysApi';
import MarkIcon from '../../assets/mark-icon.svg';

function CustomCalenderInput() {
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [year] = useState(2024);
  const [holidays, setHolidays] = useState<{ date: string; type: string; name: string }[]>([]);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [holidayInfo, setHolidayInfo] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndSetHolidays = async () => {
      try {
        const holidayData = await fetchHolidays('PL', year);
        setHolidays(holidayData);
      } catch (err) {
        console.log('Error during loading of holidays');
      }
    };

    fetchAndSetHolidays();
  }, []);

  const renderWeekDays = () => {
    const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    return daysOfWeek.map((day, index) => (
      <div key={index} className="text-center text-[#000853] text-sm font-medium">
        {day}
      </div>
    ));
  };

  const renderDays = (month: number, year: number) => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);
    const days = [];

    for (let i = 0; i < firstDay - 1; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isHoliday = holidays.some(
        (holiday) => new Date(holiday.date).getDate() === i && new Date(holiday.date).getMonth() + 1 === month
      );

      const isNationalHoliday = holidays.some(
        (holiday) => holiday.type === 'NATIONAL_HOLIDAY' && new Date(holiday.date).getDate() === i
      );

      const isSunday = new Date(year, month - 1, i).getDay() === 0;

      const isSelectedDate = selectedDate === i;

      const selectedHoliday = holidays.find(
        (holiday) => new Date(holiday.date).getDate() === i && new Date(holiday.date).getMonth() + 1 === month
      );

      const isObservanceHoliday = selectedHoliday?.type === 'OBSERVANCE';

      days.push(
        <div
          key={i}
          className={`text-center p-2 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center m-0.5 ${
            isSelectedDate
              ? 'bg-[#761BE4] text-white'
              : isHoliday || isNationalHoliday || isSunday
                ? 'text-[#898DA9]'
                : 'bg-transparent text-[#000853] text-base font-medium'
          }`}
          onClick={() => {
            if (!isSunday && !isNationalHoliday) {
              setSelectedDate(i);
            }
            if (isObservanceHoliday) {
              setHolidayInfo(selectedHoliday?.name);
            } else {
              setHolidayInfo(null);
            }
          }}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="">
      <h2 className="text-2xl mb-6 font-medium text-[#000853]">Your workout</h2>
      <div className="flex flex-col items-start">
        <h4 className="text-base mb-2 text-[#000853]">Date</h4>
        <div className="p-6 border border-[#CBB6E5] rounded-lg bg-white">
          <div className="flex justify-between items-center mb-4">
            <button onClick={() => setMonth(month === 1 ? 12 : month - 1)} className="button-prev"></button>
            <span className="text-base text-[#000853] font-medium">
              {`${new Date(year, month - 1).toLocaleString('default', { month: 'long' })} ${year}`}
            </span>
            <button onClick={() => setMonth(month === 12 ? 1 : month + 1)} className="button-next"></button>
          </div>
          <div className="grid grid-cols-7 gap-2">{renderWeekDays()}</div>
          <div className="grid grid-cols-7 gap-2 mt-2">{renderDays(month, year)}</div>
        </div>
      </div>
      {holidayInfo && (
        <div className="flex align-center gap-2 mt-4 text-center text-[#000853] text-sm">
          <img src={MarkIcon} alt="mark icon" />
          <p>{holidayInfo}</p>
        </div>
      )}
    </div>
  );
}

export default CustomCalenderInput;
