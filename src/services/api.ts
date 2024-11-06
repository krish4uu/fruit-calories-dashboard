import { Fruit } from "../types/fruit";

export const fetchFruits = async (): Promise<Fruit[]> => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL || '/api/proxy');
    return await response.json();
  } catch (error) {
    console.error('Error fetching fruits:', error);
    throw new Error('Failed to fetch fruits. Please try again later.');
  }
};