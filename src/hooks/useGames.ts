import type { GameQuery } from "@/App";
import useData from "./useData";
import type { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number
}

// const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => 
const useGames = (gameQuery: GameQuery) => 
    useData<Game>('/games', {
        params: { 
            genres: gameQuery.genre?.id, 
            platforms: gameQuery.platform?.id
        }}, 
        // [selectedGenre?.id, selectedPlatform?.id]);
        [gameQuery]);

export default useGames;