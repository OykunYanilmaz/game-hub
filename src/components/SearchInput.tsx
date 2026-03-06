import { Icon, Input, InputGroup } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"

const SearchInput = () => {
  return (
    <InputGroup startElement={<Icon as={BsSearch} color="green.400" size={"md"}/>}>
        <Input borderRadius={20} placeholder="Search games..." variant={"subtle"}/>
    </InputGroup>
  )
}

export default SearchInput