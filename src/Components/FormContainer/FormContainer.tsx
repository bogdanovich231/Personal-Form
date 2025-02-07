import { useState } from 'react';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import { validation } from '../../utils/validation';
import CustomImageInput from '../CustomImageInput/CustomImageInput';
import CustomRangeInput from '../CustomRangeInput/CustomRangeInput';
import CustomCalenderInput from '../CustomCalenderInput/CustomCalenderInput';

function FormContainer() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    file: null as File | null,
    age: 8,
    calendarDate: null as string | null,
    calendarTime: null as string | null,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files?.[0] || null : type === 'range' ? Number(value) : value,
    }));

    const validationForm = validation({
      ...formData,
      [name]: type === 'file' ? files?.[0] || null : type === 'range' ? Number(value) : value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationForm.errors[name] || '',
    }));

    setIsFormValid(validationForm.isValid);
  };
  const handleDeleteFile = () => {
    setFormData((prev) => ({
      ...prev,
      file: null,
    }));
  };

  const handleDateSelect = (selectedDate: string, selectedTime: string | null) => {
    setFormData((prev) => ({
      ...prev,
      calendarDate: selectedDate,
      calendarTime: selectedTime,
    }));

    const validationForm = validation({
      ...formData,
      calendarDate: selectedDate,
      calendarTime: selectedTime,
    });

    setErrors(validationForm.errors);
    setIsFormValid(validationForm.isValid);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationForm = validation(formData);
    if (validationForm.isValid) {
      console.log('Data:', formData);
    } else {
      setErrors(validationForm.errors);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#F0EAF8] pt-[80px] pb-[80px]">
      <h2 className="text-2xl font-medium text-[#000853]">Personal info</h2>
      <form className="flex flex-col gap-[24px] w-full max-w-[426px]" onSubmit={handleSubmit}>
        <CustomTextInput
          labelName={'First Name'}
          value={formData.firstname}
          name="firstname"
          onChange={handleChange}
          error={errors.firstname}
        />
        <CustomTextInput
          labelName={'Last Name'}
          value={formData.lastname}
          name="lastname"
          onChange={handleChange}
          error={errors.lastname}
        />
        <CustomTextInput
          labelName={'Email Address'}
          value={formData.email}
          name="email"
          onChange={handleChange}
          error={errors.email}
        />
        <CustomRangeInput value={formData.age} onChange={handleChange} name="age" error={errors.age} />
        <CustomImageInput
          error={errors.file}
          onChange={handleChange}
          fileName={formData.file?.name || null}
          onDelete={handleDeleteFile}
        />
        <CustomCalenderInput dateSelect={handleDateSelect} />
        <button
          type="submit"
          className={`text-lg text-white p-2.5 rounded-[4px] cursor-pointer mt-10 hover:bg-[#6A19CD] duration-300 ease-linear ${isFormValid ? 'bg-[#6A19CD]' : 'bg-[#CBB6E5]'}`}
          disabled={!isFormValid}
        >
          Send Application
        </button>
      </form>
    </div>
  );
}

export default FormContainer;
