import ErrorIcon from '../../assets/error-icon.svg';

interface IFormFields {
  labelName: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

function CustomTextInput({ name, labelName, value, onChange, error }: IFormFields) {
  return (
    <div>
      <label className="flex flex-col text-base text-[#000853]">
        {labelName}
        <input
          className={`w-full px-2 py-2 mt-[8px] rounded-[8px] border border-solid duration-300 ease-linear transition-colors 
          ${error ? 'border-red-500 bg-red-50 border-2' : 'border-[#CBB6E5] bg-white'} 
          focus:border-2 focus:border-[#761BE4] outline-none shadow-none`}
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
      {error && (
        <span className="flex align-center gap-[10px] mt-[8px] text-sm text-[#000853]">
          <img src={ErrorIcon} alt="error icon" />
          {error}
        </span>
      )}
    </div>
  );
}

export default CustomTextInput;
