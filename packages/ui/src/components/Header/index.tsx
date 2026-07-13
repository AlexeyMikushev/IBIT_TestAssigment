import { View, Text } from 'react-native';
import { useStyles } from './styles';

export function Header() {
  const styles = useStyles();

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Messages</Text>
      <Text style={styles.subtitle}>Swipe left or right to delete</Text>
    </View>
  );
}
