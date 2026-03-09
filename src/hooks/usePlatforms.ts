// import useData from "./useData";

import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "@/services/api-client";
import ms from "ms";
import type Platform from "../entities/Platform";


const apiClient = new APIClient<Platform>('/platforms/lists/parents');

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
// const usePlatforms = () => ({ data: platforms, error: null, isLoading: false });
const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    // queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24 * 60 * 60 * 1000, // 24h
    // initialData: { count: platforms.length, next: null, results: platforms }
    initialData: platforms
})

export default usePlatforms;