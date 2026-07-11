import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { MessagesScreen } from 'react-native-ui';
import { styles } from './App.styles';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <MessagesScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
