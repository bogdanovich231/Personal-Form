interface IFormData {
  firstname: string;
  lastname: string;
  email: string;
  file: File | null;
  age: number;
  calendarDate: string | null;
  calendarTime: string | null;
}

interface IValidation {
  isValid: boolean;
  errors: Record<string, string>;
}

export const validation = (formData: IFormData): IValidation => {
  const errors: Record<string, string> = {};
  let isValid = true;

  if (!formData.firstname) {
    errors.firstname = 'First Name is required.';
    isValid = false;
  } else if (formData.firstname[0] !== formData.firstname[0].toUpperCase()) {
    errors.firstname = 'First Name should start with an uppercase letter.';
    isValid = false;
  }

  if (!formData.lastname) {
    errors.lastname = 'Last Name is required.';
    isValid = false;
  } else if (formData.lastname[0] !== formData.lastname[0].toUpperCase()) {
    errors.lastname = 'Last Name should start with an uppercase letter.';
    isValid = false;
  }

  if (!formData.email) {
    errors.email = 'Email is required.';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email is not valid.';
    isValid = false;
  }

  if (!formData.file) {
    errors.file = 'File is required.';
    isValid = false;
  } else {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const maxSize = 5 * 1024 * 1024;

    if (!allowedTypes.includes(formData.file.type)) {
      errors.file = 'Only JPG, PNG, and GIF files are allowed.';
      isValid = false;
    } else if (formData.file.size > maxSize) {
      errors.file = 'File size should not exceed 5MB.';
      isValid = false;
    }
  }

  if (formData.age < 14) {
    errors.age = 'Age must be at least 14 years old.';
    isValid = false;
  }

  if (!formData.calendarDate) {
    errors.calendarDate = 'Please select a date.';
    isValid = false;
  }

  if (!formData.calendarTime) {
    errors.calendarTime = 'Please select a time.';
    isValid = false;
  }

  return { isValid, errors };
};
