import { View } from 'react-native';
import { Header } from '../Header';
import { ItemList } from '../ItemList';
import { useStyles } from './styles';

export function MessagesScreen() {
  const styles = useStyles();

  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <Header />
        <ItemList />
      </View>
    </View>
  );
}
