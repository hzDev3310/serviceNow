import { useState } from 'react';
import api from './apiClient';

function usePost(endpoint) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState([]);

  const url = `${api}${endpoint}`;

  const postData = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) { // Check if response is not OK
        throw new Error('Failed to fetch');
      }
      const result = await response.json();
      setResponseData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error, data: responseData };
}

export default usePost;
