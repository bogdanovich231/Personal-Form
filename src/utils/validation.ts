export interface IFormData {
  firstname: string;
  lastname: string;
  email: string;
  file: File | null;
  age: number;
  calendarDate: string | null;
  calendarTime: string | null;
}

export const validateName = (name: string, field: 'firstname' | 'lastname'): string => {
  if (!name) return `${field === 'firstname' ? 'First' : 'Last'} Name is required.`;
  if (name[0] !== name[0].toUpperCase())
    return `${field === 'firstname' ? 'First' : 'Last'} Name should start with uppercase.`;
  return '';
};

export const validateEmail = (email: string): string => {
  if (!email) return 'Email is required.';
  if (!/\S+@\S+\.\S+/.test(email)) return 'Email is not valid.';
  return '';
};

export const validateFile = (file: File | null): string => {
  if (!file) return 'File is required.';

  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  const maxSize = 5 * 1024 * 1024;

  if (!allowedTypes.includes(file.type)) return 'Only JPG, PNG, and GIF files are allowed.';
  if (file.size > maxSize) return 'File size should not exceed 5MB.';

  return '';
};

export const validateAge = (age: number): string => {
  if (age < 14) return 'Age must be at least 14 years old.';
  return '';
};

export const validateCalendar = (date: string | null, time: string | null): Record<string, string> => {
  const errors: Record<string, string> = {};
  if (!date) errors.calendarDate = 'Please select a date.';
  if (!time) errors.calendarTime = 'Please select a time.';
  return errors;
};

export const validateField = (name: string, value: string | number | File | null, formData: IFormData): string => {
  switch (name) {
    case 'firstname':
    case 'lastname':
      return validateName(value as string, name);
    case 'email':
      return validateEmail(value as string);
    case 'file':
      return validateFile(value as File | null);
    case 'age':
      return validateAge(value as number);
    case 'calendarDate':
    case 'calendarTime':
      return validateCalendar(
        name === 'calendarDate' ? (value as string | null) : formData.calendarDate,
        name === 'calendarTime' ? (value as string | null) : formData.calendarTime
      )[name];
    default:
      return '';
  }
};
