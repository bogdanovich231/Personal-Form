import { useState } from 'react';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import { validation } from '../../utils/validation';

function FormContainer() {
  const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
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
    <div className="flex flex-col items-center min-h-screen bg-[#F0EAF8]">
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
        <button type="submit">Send Application</button>
      </form>
    </div>
  );
}

export default FormContainer;
