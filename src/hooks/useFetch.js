import { useEffect, useState } from 'react';
import config from 'config';
const useFetch = (url, options) => {
  url = url.startsWith('/') ? `${config.calebApi}${url}` : url;
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(null);
  useEffect(() => {
    const consumeService = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setData(json.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    consumeService();
  }, [options, url]);
  return { data, error, isLoading };
};

export default useFetch;
