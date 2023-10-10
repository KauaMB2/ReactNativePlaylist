import { View, Text, StyleSheet, StatusBar,Button } from 'react-native'
import {useState} from 'react'
const App = () => {
  const [color,setColor]=useState("")
  return (
    <View style={styles.container}>
      <StatusBar
      backgroundColor={color}
      barStyle="default"
      hidden={false}
      animated={true}
      translucent={false}
      />
      <Text>CFB Cursos</Text>
      <Text>React Native Course</Text>
      <Button title='Red' color="red" onPress={()=>{setColor("red")}}/>
      <Button title='Green' color="green" onPress={()=>{setColor("green")}}/>
      <Button title='Blue' color="blue" onPress={()=>{setColor("blue")}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  }
})

export default App;