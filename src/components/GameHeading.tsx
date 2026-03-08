import type { GameQuery } from "@/App";
// import platforms from "@/data/platforms";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = (props: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === props.gameQuery.genreId);
  
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(p => p.id === props.gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
