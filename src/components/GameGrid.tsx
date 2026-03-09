import useGames from "@/hooks/useGames";
import { Text, SimpleGrid, Spinner } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
// import type { GameQuery } from "@/App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// interface Props {
//     gameQuery: GameQuery;
//     // selectedGenre: Genre | null;
//     // selectedPlatform: Platform | null;
// }

// const GameGrid = ({gameQuery}: Props) => {
const GameGrid = () => {
  // const {data, error, isLoading, fetchNextPage, hasNextPage} = useGames(gameQuery);
  const {data, error, isLoading, fetchNextPage, hasNextPage} = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>

  const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    // <Box padding="10px">
    <InfiniteScroll dataLength={fetchedGamesCount} hasMore={!!hasNextPage} next={() => fetchNextPage()} loader={<Spinner />}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4}} padding="10px" gap={6}>
          {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton/></GameCardContainer>)}
          {data?.pages.map((page, index) => 
            <React.Fragment key={index}>
              {page.results.map((game) => <GameCardContainer key={game.id}><GameCard game={game}></GameCard></GameCardContainer>)}
            </React.Fragment>)}
          {/* {data?.results.map((game) => (
              <GameCardContainer key={game.id}><GameCard game={game}></GameCard></GameCardContainer>
          ))} */}
      </SimpleGrid>
    </InfiniteScroll>
    // {/* {hasNextPage && <Button variant="outline" width="100%" marginY={5} onClick={() => fetchNextPage()}>{isFetchingNextPage ? 'Loading...' : 'Load more' }</Button>} */}
    // {/* </Box> */}
  );
};

export default GameGrid