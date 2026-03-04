import type { Game } from "@/hooks/useGames";
import { Card, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      {/* <Card.Header /> */}
      <Image src={game.background_image}></Image>;
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>    
            <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
};

export default GameCard;
