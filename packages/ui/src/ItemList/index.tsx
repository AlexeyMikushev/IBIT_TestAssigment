import { memo, useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { MOCK_DATA } from '../data/mockData';
import type { ListItemData } from '../data/mockData';
import { ListItem } from '../ListItem';
import { SwipeableRow } from '../SwipeableRow';
import { styles } from './styles';

function keyExtractor(item: ListItemData) {
  return item.id;
}

type RowProps = {
  item: ListItemData;
  onDelete: (id: string) => void;
};

function RowComponent({ item, onDelete }: RowProps) {
  const handleDelete = () => onDelete(item.id);
  return (
    <SwipeableRow onDelete={handleDelete}>
      <ListItem item={item} />
    </SwipeableRow>
  );
}

const Row = memo(RowComponent);

export function ItemList() {
  const [items, setItems] = useState(MOCK_DATA);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: ListItemData }) => (
      <Row item={item} onDelete={removeItem} />
    ),
    [removeItem]
  );

  return (
    <FlatList
      style={styles.list}
      data={items}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
}
