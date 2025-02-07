import ErrorIcon from '../../assets/error-icon.svg';
import DeleteIcon from '../../assets/delete-icon.svg';
import DeleteIconHover from '../../assets/delete-icon-hover.svg';
import './CustomImageInput.css';

interface IFileInput {
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileName: string | null;
  onDelete: () => void;
}

function CustomImageInput({ error, onChange, fileName, onDelete }: IFileInput) {
  return (
    <div className="mt-10">
      <label className="flex flex-col text-base text-[#000853]">
        Photo
        <div
          className={`w-full py-8 mt-[8px] rounded-[8px] border border-solid duration-300 ease-linear transition-colors
          flex items-center justify-center text-center gap-2
          ${error ? 'border-red-500 bg-red-50 border-2' : 'border-[#CBB6E5] bg-white'} 
          focus:border-2 focus:border-[#761BE4] outline-none shadow-none`}
        >
          <input className="hidden" type="file" name="file" accept="image/*" onChange={onChange} />
          {fileName ? (
            <span className="flex gap-[7px] text-[#000853]">
              {fileName}
              <button type="button" className="cursor-pointer relative inline-block group" onClick={onDelete}>
                <img
                  src={DeleteIcon}
                  alt="delete icon"
                  className=" w-6 h-6 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                />
                <img
                  src={DeleteIconHover}
                  alt="delete icon"
                  className="absolute top-0 left-0 w-6 h-6 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                />
              </button>
            </span>
          ) : (
            <label htmlFor="file-upload" className="cursor-pointer text-[#761BE4] underline">
              Upload a file
            </label>
          )}
          {!fileName && <span className="span-drop text-[#898DA9]"> or drag and drop here</span>}
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
