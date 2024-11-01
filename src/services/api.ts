import { Fruit } from "../types/fruit";

export const API_URL = "/api";

export const fetchFruits = async (): Promise<Fruit[]> => {
  const response = await fetch(API_URL, {
    method: "GET",
    mode: "cors",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch fruits");
  }
  return response.json();
};
