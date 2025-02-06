interface IFormFields {
  labelName: string
  value: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

function CustomTextInput({ name, labelName, value, onChange, error }: IFormFields) {
  return (
    <div>
      <label className="flex flex-col text-base text-[#000853]">
        {labelName}
        <input
          className="w-full px-2 py-2 mt-[8px] rounded-[8px] border border-solid duration-300 easy-linear transition-colors border-[#CBB6E5] bg-white focus:border-2  border-[#761BE4] outline-none shadow-none"
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
      {error && <span className="text-sm text-[#000853]">{error}</span>}
    </div>
  )
}

export default CustomTextInput
