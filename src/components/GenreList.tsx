import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner color="green.500" size="lg" marginTop="7px" marginLeft="3px"/>

  return (
    <List.Root listStyleType="none">
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button _hover={{color: "green", textDecoration: "underline"}} 
                    color={genre.id === selectedGenre?.id ? 'green' : '#e4e4e7'} fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} 
                    onClick={() => onSelectGenre(genre)} variant="plain" fontSize='lg'>{genre.name}</Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
