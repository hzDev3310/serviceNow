import { useState, useEffect } from 'react';
import api from './apiClient';

function useGet(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = `${api}${endpoint}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [data, url ,endpoint]);

  return { data, loading, error };
}

export default useGet;
