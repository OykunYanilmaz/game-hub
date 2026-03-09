// import type { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
// import platforms from "@/data/platforms";
// import useGenres from "@/hooks/useGenres";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
// import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

// interface Props {
//   gameQuery: GameQuery;
// }

// const GameHeading = (props: Props) => {
const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);

  // const genre = useGenre(props.gameQuery.genreId);
  // const platform = usePlatform(props.gameQuery.platformId);
  const genre = useGenre(genreId);
  const platform = usePlatform(platformId);
  
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
