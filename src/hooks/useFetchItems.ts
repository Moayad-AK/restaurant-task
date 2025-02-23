import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { IItemsResponse } from "../types/items";

const useFetchItems = (id: number) =>
  useInfiniteQuery<IItemsResponse, Error>({
    queryKey: ["items", id], // Include id in the queryKey
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<IItemsResponse>(import.meta.env.VITE_APP_ITEMS_API_URL, {
          params: {
            cat: id,
            page: pageParam,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, // 1 minute
    keepPreviousData: true,
    getNextPageParam: (lastPage) =>
      lastPage.data.items.links.next_page_url
        ? lastPage.data.items.links.current_page + 1
        : undefined,
  });

export default useFetchItems;
