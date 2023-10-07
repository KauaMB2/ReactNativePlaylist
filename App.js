import { View, Text, Image } from 'react-native';
import {useState} from "react"
import styles from "./styles/style.js"
import LP from './components/FlatList'
const App = () => {
  const [isShow, setIsShow]=useState(true)
  return (
    <View style={styles.container}>
      <Text style={{paddingTop: 110}}>Clique nos botões: </Text>
      <LP/>
    </View>
  )
}


export default App
