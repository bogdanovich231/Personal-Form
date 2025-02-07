import ErrorIcon from '../../assets/error-icon.svg';

interface IFileInput {
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileName: string | null;
}

function CustomImageInput({ error, onChange, fileName }: IFileInput) {
  return (
    <div>
      <label className="flex flex-col text-base text-[#000853]">
        Photo
        <div
          className={`w-full py-8 mt-[8px] rounded-[8px] border border-solid duration-300 ease-linear transition-colors
          flex items-center justify-center text-center gap-2
          ${error ? 'border-red-500 bg-red-50 border-2' : 'border-[#CBB6E5] bg-white'} 
          focus:border-2 focus:border-[#761BE4] outline-none shadow-none`}
        >
          <input className="hidden" type="file" name="file" accept="image/*" onChange={onChange} />
          <label htmlFor="file-upload" className=" cursor-pointer text-[#761BE4] underline">
            {fileName ? fileName : 'Upload a file'}
          </label>
          {!fileName && <span className="text-[#898DA9]"> or drag and drop here</span>}
        </div>
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

export default CustomImageInput;
