import { useState } from 'react';
import { getDaysInMonth, getFirstDayOfMonth } from '../../utils/getDate';
import './CustomCalenderInput.css';

function CustomCalenderInput() {
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [year] = useState(currentDate.getFullYear());
  const [currentDay] = useState(currentDate.getDate());

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
      const isCurrentDay =
        i === currentDay && month === currentDate.getMonth() + 1 && year === currentDate.getFullYear();

      days.push(
        <div
          key={i}
          className={`text-center p-2 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center m-0.5 ${
            isCurrentDay ? 'bg-[#761BE4] text-white' : 'bg-transparent text-[#000853] text-base font-medium'
          }`}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="max-w-sm mx-auto p-6 border border-[#CBB6E5] rounded-lg bg-white">
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
  );
}

export default CustomCalenderInput;
