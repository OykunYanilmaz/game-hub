// import useData from "./useData";

import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import type { Platform } from "./useGames";
import apiClient from "@/services/api-client";
import type { FetchResponse } from "@/services/api-client";

// NOTE: We will see the behaviour after commenting this block.
// interface Platform {
//     id: number;
//     name: string;
//     slug: string;
// }

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
// const usePlatforms = () => ({ data: platforms, error: null, isLoading: false });
const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms }
})

export default usePlatforms;