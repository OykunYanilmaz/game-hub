// import useData from "./useData";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
// import type { FetchResponse } from "@/services/api-client";
import genres from "../data/genres";

const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');
// const useGenres = () => ({ data: genres, error: null, isLoading: false })
const useGenres = () => useQuery({
    queryKey: ['genres'],
    // queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    // initialData: { count: genres.length, next: null, results: genres }
    initialData: genres
})


export default useGenres;