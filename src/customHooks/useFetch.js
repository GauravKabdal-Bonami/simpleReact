import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [finalData, setFinalData] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  async function getFetch() {
    try {
      const resp = await fetch(url);
      const jsonData = await resp.json();
      setFinalData(jsonData);
    } catch (error) {
      setFetchError(error.message);
    }
  }

  useEffect(() => {
    getFetch();
  }, []);

  return [finalData, fetchError];
};
