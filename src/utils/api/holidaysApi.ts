export const fetchHolidays = async (country: string, year: number) => {
  const apiKey = '8DX8eEe67njS1lbThFsdSw==rQQNpQ8PYbPZBjrx';
  const url = `https://api.api-ninjas.com/v1/holidays?country=${country}&year=${year}`;

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
