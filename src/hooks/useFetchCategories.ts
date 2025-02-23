import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ICategoriesResponse } from "../types/categories";

const useFetchCategories = () =>
  useQuery<ICategoriesResponse, Error>({
    queryKey: ["categories"],
    queryFn: () =>
      axios
        .get<ICategoriesResponse>(import.meta.env.VITE_APP_CATEGORIES_API_URL)
        .then((res) => res.data),
    // staleTime: 1 * 60 * 1000, // 1 minute
    keepPreviousData: true,
  });

export default useFetchCategories;
