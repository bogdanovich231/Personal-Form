import { IFormData } from '../validation';

export const submitData = async (formData: IFormData) => {
  try {
    const response = await fetch('https://1n09q877x5.execute-api.eu-west-1.amazonaws.com/prod/users', {
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
