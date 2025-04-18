import React, { useRef, useState } from 'react';
import ErrorIcon from '../../assets/error-icon.svg';
import DeleteIcon from '../../assets/delete-icon.svg';
import DeleteIconHover from '../../assets/delete-icon-hover.svg';
import './CustomImageInput.css';

interface IFileInput {
  error: string;
  onChange: (file: File | null) => void;
  fileName: string | null;
  onDelete: () => void;
}

function CustomImageInput({ error, onChange, fileName, onDelete }: IFileInput) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(e.type === 'dragenter');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.length) {
      onChange(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.files?.[0] || null);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mt-10">
      <label className="flex flex-col text-base text-[#000853]">
        Photo
        <div
          className={`w-full py-8 mt-[8px] rounded-[8px] border border-solid duration-300 ease-linear transition-colors
          flex items-center justify-center text-center gap-2
          ${error ? 'border-red-500 bg-red-50 border-2' : isDragging ? 'border-[#761BE4] bg-[#F3E8FF]' : 'border-[#CBB6E5] bg-white'} 
          focus:border-2 focus:border-[#761BE4] outline-none shadow-none`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <input className="hidden" type="file" name="file" accept="image/*" onChange={handleFileChange} />
          {fileName ? (
            <span className="flex gap-[7px] text-[#000853]">
              {fileName}
              <button type="button" className="cursor-pointer relative inline-block group" onClick={onDelete}>
                <img
                  src={DeleteIcon}
                  alt="delete icon"
                  className="w-6 h-6 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
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
