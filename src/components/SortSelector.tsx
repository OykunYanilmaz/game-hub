import { Button, Icon, Menu, Portal } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
    onSelectSortOder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({ onSelectSortOder, sortOrder }: Props) => {

  const sortOrders = [
    { value: "", label: "Relevance"},
    { value: "-added", label: "Date added"},
    { value: "name", label: "Name"},
    { value: "-released", label: "Release date"},
    { value: "-metacritic", label: "Popularity"},
    { value: "-rating", label: "Average rating"},
  ];

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

  return (
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            Order by: {currentSortOrder?.label || 'Relevance'}
            <Icon as={BsChevronDown}></Icon>
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {sortOrders.map(order => <Menu.Item onClick={() => onSelectSortOder(order.value)} key={order.value} value={order.value}>{order.label}</Menu.Item>)}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    );
}

export default SortSelector