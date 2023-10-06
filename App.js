import { View, Text, StyleSheet, Button, Image } from 'react-native';
import {useState} from "react"
import Box from './components/Box'
const App = () => {
  const [isConditionMet, setIsConditionMet]=useState(true)
  return (
    <View style={styles.container}>
      {/* Use a ternary operator to conditionally format the component */}
      {isConditionMet ? (
        <Box/>
      ) : (
        <Text style={[styles.text, styles.errorText]}>Image didnt appear</Text>
      )}
      <View>
        <Button color={isConditionMet ? ("blue"):("red")} title='Click here' onPress={()=>{setIsConditionMet(!isConditionMet)}}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  errorText: {
    color: 'red', // Apply a different style for error condition
  }
})

export default App
