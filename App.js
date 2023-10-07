import { StyleSheet,
         Text, 
         View, 
         TouchableHighlight,
         TouchableOpacity } from 'react-native';
import {useState} from 'react'


export default function App() {
  const [count,setCount]=useState(0)
  return (
    <View style={styles.container}>
      <Text>Counter: {count}</Text>
      <TouchableHighlight onPress={()=>{setCount(count+1)}}
        style={styles.touchable}
        underlayColor="red"
      >
        <Text style={styles.text}>Click Me!</Text>
      </TouchableHighlight>
      <TouchableOpacity style={styles.touchable} onPress={()=>{setCount(count+1)}}>
        <Text style={styles.text}>Click Me!</Text>
      </TouchableOpacity>
    </View>
  )
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    height: 50,
    width: 200,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4287f5',
    marginBottom: 10,
  },
  text: {
    color: "#fff"
  }
})