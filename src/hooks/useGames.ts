import type { GameQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";
import APIClient, { type FetchResponse } from "@/services/api-client";
import type { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>('/games');

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

// const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => 
const useGames = (gameQuery: GameQuery) => 
    useQuery<FetchResponse<Game>, Error>({
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
        queryFn: () => apiClient.getAll({
            params: { 
                genres: gameQuery.genre?.id, 
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        })
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

export default useGames;