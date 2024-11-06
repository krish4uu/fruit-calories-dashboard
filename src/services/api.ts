import { Fruit } from "../types/fruit";

const getApiUrl = () => {
  if (import.meta.env.MODE === 'production') {
    return 'https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws';
  }
  return '/api';
};

export const fetchFruits = async (): Promise<Fruit[]> => {
  try {
    const response = await fetch(getApiUrl(), {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': window.location.origin,
      },
      credentials: 'omit',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching fruits:', error);
    throw new Error('Failed to fetch fruits. Please try again later.');
  }
};