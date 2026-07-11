import { FlatList } from 'react-native';
import { MOCK_DATA } from '../data/mockData';
import type { ListItemData } from '../data/mockData';
import { ListItem } from '../ListItem';
import { styles } from './styles';

function renderItem({ item }: { item: ListItemData }) {
  return <ListItem item={item} />;
}

function keyExtractor(item: ListItemData) {
  return item.id;
}

export function ItemList() {
  return (
    <FlatList
      style={styles.list}
      data={MOCK_DATA}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
}
