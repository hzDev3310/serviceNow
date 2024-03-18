import { useState } from 'react';
import api from './apiClient';

function useDelete(endpoint) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = `${api}${endpoint}`;
  const deleteData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteData, loading, error };
}

export default useDelete;
