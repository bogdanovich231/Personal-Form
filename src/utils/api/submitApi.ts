import { IFormData } from '../validation';

export const submitData = async (formData: IFormData) => {
  try {
    const response = await fetch('http://letsworkout.pl/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Error sending data:');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending data:', error);
    throw error;
  }
};
