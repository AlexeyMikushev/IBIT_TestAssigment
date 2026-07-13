import { memo, useCallback } from 'react';
import { FlatList } from 'react-native';
import type { ListItemData } from '../data/mockData';
import { useListStore } from '../store/useListStore';
import { ListItem } from '../ListItem';
import { SwipeableRow } from '../SwipeableRow';
import { styles } from './styles';

const ROW_HEIGHT = 81;

function keyExtractor(item: ListItemData) {
  return item.id;
}

function getItemLayout(
  _data: ArrayLike<ListItemData> | null | undefined,
  index: number
) {
  return { length: ROW_HEIGHT, offset: ROW_HEIGHT * index, index };
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
  const items = useListStore((state) => state.items);
  const removeItem = useListStore((state) => state.removeItem);

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
      getItemLayout={getItemLayout}
      initialNumToRender={12}
      maxToRenderPerBatch={12}
      windowSize={7}
    />
  );
}
