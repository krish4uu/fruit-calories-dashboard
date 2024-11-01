import { useState, useEffect } from 'react';
import { Fruit } from '../types/fruit';
import { fetchFruits } from '../services/api';

export const useFruits = () => {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFruits = async () => {
      try {
        const data = await fetchFruits();
        setFruits(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch fruits');
      } finally {
        setLoading(false);
      }
    };

    loadFruits();
  }, []);

  return { fruits, loading, error };
};