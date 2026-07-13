import { View, Text } from 'react-native';
import type { ListItemData } from '../data/mockData';
import { Avatar } from '../Avatar';
import { useStyles } from './styles';

type Props = {
  item: ListItemData;
};

export function ListItem({ item }: Props) {
  const styles = useStyles();

  return (
    <View style={styles.row}>
      <Avatar name={item.name} color={item.color} uri={item.avatarUrl} />
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
