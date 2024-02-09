import axios from "axios";
import { useEffect, useState } from "react";
import { IFoodItem } from "../data";

interface AxiosParams {
  method?: string;
  url: string;
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
  // ... other properties based on your requirements
}

// axios.defaults.baseURL = "youre API";

const instance = axios.create({
  baseURL: "https://react-mini-projects-api.classbon.com",
});

const useAxios = (axiosParams: AxiosParams) => {
  const [response, setResponse] = useState<IFoodItem[]>([]);
  const [error, setError] = useState<unknown | string>("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await instance.request(axiosParams);
      setResponse(result.data);
    } catch (e: unknown) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [axiosParams.url]);

  return { response, error, loading };
};

export default useAxios;
