import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'
import ModalComponent from './components/ModalComponent'
const App = () => {
  return (
    <ModalComponent/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App