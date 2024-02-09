import axios from "axios";
import { useEffect, useState } from "react";

interface AxiosParams {
  method: string;
  url: string;
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
  // ... other properties based on your requirements
}

axios.defaults.baseURL = "youre API";

const useAxios = (axiosParams: AxiosParams) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<unknown | string>("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await axios.request(axiosParams);
      setResponse(result.data);
    } catch (e: unknown) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };
};

export default useAxios;
