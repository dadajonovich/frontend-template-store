import { useState, useEffect } from 'react';
function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
    window.scrollTo(0, 0);
  }, [uri]);
  return {
    loading,
    data,
    error,
  };
}

export default useFetch;
