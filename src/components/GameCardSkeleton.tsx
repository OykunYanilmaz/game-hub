import { Card, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      {/* <Card.Header /> */}
      <Skeleton height="200px"/>
      <Card.Body>
        <SkeletonText />
      </Card.Body>
      {/* <Card.Footer /> */}
    </Card.Root>
  )
}

export default GameCardSkeleton