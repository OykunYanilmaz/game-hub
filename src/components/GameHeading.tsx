import type { GameQuery } from "@/App"
import { Heading } from "@chakra-ui/react"

interface Props {
    gameQuery: GameQuery
}

const GameHeading = (props: Props) => {
  const heading = `${props.gameQuery.platform?.name || ''} ${props.gameQuery.genre?.name || ''} Games`

  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>{heading}</Heading>
  )
}

export default GameHeading