import { View } from 'react-native';
import { Header } from '../Header';
import { ItemList } from '../ItemList';
import { styles } from './styles';

export function MessagesScreen() {
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <Header />
        <ItemList />
      </View>
    </View>
  );
}
