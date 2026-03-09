import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import useGameQueryStore from "@/store";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";

// interface Props {
//   onSelectGenre: (genre: Genre) => void;
//   selectedGenreId?: number;
// }

// const GenreList = ({
//   selectedGenreId,
//   onSelectGenre,
// }: Props) => {
const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

  if (error) return null;
  if (isLoading)
    return (
      <Spinner color="green.500" size="lg" marginTop="7px" marginLeft="3px" />
    );

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        {" "}
        Genres
      </Heading>
      <List.Root listStyleType="none">
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign={"left"}
                flex={1}
                justifyContent="flex-start"
                _hover={{ color: "green", textDecoration: "underline" }}
                color={genre.id === selectedGenreId ? "green" : "#e4e4e7"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                // onClick={() => onSelectGenre(genre)}
                onClick={() => setSelectedGenreId(genre.id)}
                variant="plain"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
