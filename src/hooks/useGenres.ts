// import useData from "./useData";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
// import type { FetchResponse } from "@/services/api-client";
import genres from "../data/genres";
import ms from "ms";
import type { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres');

// const useGenres = () => useData<Genre>('/genres');
// const useGenres = () => ({ data: genres, error: null, isLoading: false })
const useGenres = () => useQuery({
    queryKey: ['genres'],
    // queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24 * 60 * 60 * 1000, // 24h
    // initialData: { count: genres.length, next: null, results: genres }
    initialData: genres
})


export default useGenres;