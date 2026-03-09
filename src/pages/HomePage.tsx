import GameGrid from "@/components/GameGrid"
import GameHeading from "@/components/GameHeading"
import GenreList from "@/components/GenreList"
import PlatformSelector from "@/components/PlatformSelector"
import SortSelector from "@/components/SortSelector"
import { Grid, GridItem, Box, Flex } from "@chakra-ui/react"

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem
        area="aside"
        paddingX={5}
        display={{ base: "none", lg: "block" }}
      >
        {/* <GenreList
          selectedGenreId={gameQuery.genreId}
          onSelectGenre={(genre) =>
            setGameQuery({ ...gameQuery, genreId: genre.id })
          }
        /> */}
        <GenreList></GenreList>
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft={2}>
          {/* <GameHeading gameQuery={gameQuery} /> */}
          <GameHeading />
          <Flex gap={5} marginBottom={5}>
            {/* <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            ></PlatformSelector> */}
            <PlatformSelector></PlatformSelector>
            {/* <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></SortSelector> */}
            <SortSelector></SortSelector>
          </Flex>
        </Box>
        {/* <GameGrid gameQuery={gameQuery}></GameGrid> */}
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default HomePage