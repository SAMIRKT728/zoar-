import { useState } from 'react';
import axios from 'axios';

const useApiRequest = (initialUrl, initialMethod, initialData) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendRequest = async (url = initialUrl, method = initialMethod, data = initialData, headers = {}) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('jwt-token');
      const res = await axios({
        url,
        method,
        data,
        headers: {
          Authorization: `Bearer ${token}`,
          ...headers,
        },
      });
      setData(res.data);
      return res.data;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { sendRequest, loading, error, data };
};

export default useApiRequest;
