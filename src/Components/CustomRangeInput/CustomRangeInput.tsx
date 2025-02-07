import { getBackground } from '../../utils/getBackground';
import { getPosition } from '../../utils/getPosition';
import ErrorIcon from '../../assets/error-icon.svg';
import './CustomRangeInput.css';

interface IRangeInput {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  error?: string;
}

function CustomRangeInput({ value, onChange, name, error }: IRangeInput) {
  return (
    <div className="relative w-full">
      <label className="flex flex-col text-base text-[#000853]">
        Age
        <div className="flex justify-between align-center text-xs mt-4">
          <span className="ml-1">8</span>
          <span>100</span>
        </div>
        <div className="relative">
          <input
            className="custom-range w-full mt-1 h-1.5 bg-[#CBB6E5] rounded-lg cursor-pointer appearance-none"
            style={{
              accentColor: '#761BE4',
              background: getBackground(value),
            }}
            name={name}
            type="range"
            min="8"
            max="100"
            step="1"
            value={value}
            onChange={onChange}
          />
          <span
            className="number absolute text-[#761BE4] bg-white rounded h-6 w-9 flex align-center justify-center font-medium text-xs pt-1 mt-2"
            style={{
              left: getPosition(value),
              transform: 'translateX(5px)',
              top: '30px',
            }}
          >
            {value}
          </span>
        </div>
      </label>
      {error && (
        <span className="flex align-center gap-[10px] mt-[45px] text-sm text-[#000853]">
          <img src={ErrorIcon} alt="error icon" />
          {error}
        </span>
      )}
    </div>
  );
}

export default CustomRangeInput;
