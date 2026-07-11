import { View, Text } from 'react-native';
import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Messages</Text>
      <Text style={styles.subtitle}>Swipe left or right to delete</Text>
    </View>
  );
}
