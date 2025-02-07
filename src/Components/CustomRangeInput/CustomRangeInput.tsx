import { getBackground } from '../../utils/getBackground';
import './CustomRangeInput.css';

interface IRangeInput {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

function CustomRangeInput({ value, onChange, name }: IRangeInput) {
  return (
    <div>
      <label className="flex flex-col text-base text-[#000853]">
        Age
        <input
          className="custom-range w-full mt-[8px] h-1.5 bg-[#CBB6E5] rounded-lg cursor-pointer appearance-none"
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
      </label>
    </div>
  );
}

export default CustomRangeInput;
