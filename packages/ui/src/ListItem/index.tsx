import { View, Text } from 'react-native';
import type { ListItemData } from '../data/mockData';
import { styles } from './styles';

interface ListItemProps {
  item: ListItemData;
}

export function ListItem({ item }: ListItemProps) {
  return (
    <View style={styles.row}>
      <View style={[styles.avatar, { backgroundColor: item.color }]} />
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.text} numberOfLines={1}>
          {item.text}
        </Text>
      </View>
    </View>
  );
}
