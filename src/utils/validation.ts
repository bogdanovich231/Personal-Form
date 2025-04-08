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
