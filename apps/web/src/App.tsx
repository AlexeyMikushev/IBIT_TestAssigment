import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MessagesScreen } from 'react-native-ui'
import { styles } from './App.styles'

function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <MessagesScreen />
    </GestureHandlerRootView>
  )
}

export default App
