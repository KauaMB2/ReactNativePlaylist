import {View, Text, StyleSheet} from 'react-native'
import SwitchButton from './components/SwitchButton'
export default function App() {
  return (
    <View style={styles.container}>
      <SwitchButton/>
      <SwitchButton/>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})