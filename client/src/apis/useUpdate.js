import { useState } from 'react';
import api from './apiClient';

const useUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const updateData = async (endpoint, data) => {
    const url = `${api}${endpoint}`;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setResponseData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { updateData, loading, error, responseData };
}

export default useUpdate;
