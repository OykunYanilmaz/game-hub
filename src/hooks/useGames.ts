// import type { GameQuery } from "@/App";
import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { type FetchResponse } from "@/services/api-client";
import ms from "ms";
import useGameQueryStore from "@/store";
import type Game from "../entities/Game";

const apiClient = new APIClient<Game>('/games');

// const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => 
// const useGames = (gameQuery: GameQuery) => 
const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery);

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        // queryFn: () => apiClient
        //   .get<FetchResponse<Game>>('/games', {
        //     params: { 
        //         genres: gameQuery.genre?.id, 
        //         parent_platforms: gameQuery.platform?.id,
        //         ordering: gameQuery.sortOrder,
        //         search: gameQuery.searchText
        //     }
        //   })
        //   .then(res => res.data)
        queryFn: ({ pageParam }) => apiClient.getAll({
            params: { 
                genres: gameQuery.genreId, 
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        initialPageParam: 1,
        staleTime: ms('24h'), //24 * 60 * 60 * 1000, // 24h
    });

    // useData<Game>('/games', {
    //     params: { 
    //         genres: gameQuery.genre?.id, 
    //         platforms: gameQuery.platform?.id,
    //         ordering: gameQuery.sortOrder,
    //         search: gameQuery.searchText
    //     }}, 
    //     // [selectedGenre?.id, selectedPlatform?.id]);
    //     [gameQuery]);
}
   

export default useGames;