import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
  let [response, setResponse] = useState(null);
  let [error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(null);
  useEffect(() => {
    const consumeService = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    consumeService();
  }, [options, url]);
  return { response, error, isLoading };
};

export default useFetch;
