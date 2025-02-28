import { useState, useEffect } from "react";
import { fetchFakeAnimals } from "../api/fetchAnimals";
import type { Animal } from "../types";

const useFetchAnimals = (query: string) => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchFakeAnimals(query)
      .then((data) => {
        setAnimals(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [query]);

  return { animals, loading };
};

export default useFetchAnimals;