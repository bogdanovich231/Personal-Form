export const submitData = async (formData: FormData) => {
  try {
    const response = await fetch('http://letsworkout.pl/submit', {
      method: 'POST',
      body: formData,
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
