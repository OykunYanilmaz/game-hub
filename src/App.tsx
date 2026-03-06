import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr"
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem
        area="aside"
        paddingX={5}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
      </GridItem>
      <GridItem area="main">
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)}></PlatformSelector>
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
