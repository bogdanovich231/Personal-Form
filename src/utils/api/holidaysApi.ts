export const fetchHolidays = async (country: string) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.api-ninjas.com/v1/holidays?country=${country}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error('Error during data retrieval');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error on API request:', error);
    throw error;
  }
};
