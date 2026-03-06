import useGames, { type Platform } from "@/hooks/useGames";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Genre } from "@/hooks/useGenres";
import type { GameQuery } from "@/App";

interface Props {
    gameQuery: GameQuery;
    // selectedGenre: Genre | null;
    // selectedPlatform: Platform | null;
}

const GameGrid = ({gameQuery}: Props) => {
  const {data, error, isLoading} = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4}} padding="10px" gap={6}>
            {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton/></GameCardContainer>)}
            {data.map((game) => (
                <GameCardContainer key={game.id}><GameCard game={game}></GameCard></GameCardContainer>
            ))}
        </SimpleGrid>
    </>
  )
}

export default GameGrid