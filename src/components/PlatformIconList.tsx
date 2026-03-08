import type { Platform } from "@/hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGamepad
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { SiSega } from "react-icons/si";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
    sega: SiSega,
    "neo-geo": FaGamepad
  }

  return (
    // theme.space value probably 4px. 1 = 4px
    <HStack marginY={1}> 
      {platforms.map((platform) => (
        <Icon key={platform.id ?? platform.slug} as={iconMap[platform.slug]} color="gray.500"></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
