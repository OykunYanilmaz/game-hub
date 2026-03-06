import usePlatforms from "@/hooks/usePlatforms";
import { Button, Flex, Icon, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;
  
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {/* <Flex align="center" gap={2}>
            Platforms
            <BsChevronDown />
          </Flex> */}
          Platforms
          <Icon as={BsChevronDown}></Icon>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map(platform => <Menu.Item value={platform.slug} key={platform.id}>{platform.name}</Menu.Item>)}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
