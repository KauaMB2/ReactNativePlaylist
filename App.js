import { View, Text, StyleSheet, Button } from 'react-native';
import {useState} from "react"
const App = () => {
  const [isConditionMet, setIsConditionMet]=useState(true)
  return (
    <View style={styles.container}>
      {/* Use a ternary operator to conditionally format the component */}
      {isConditionMet ? (
        <Text style={styles.text}>Condition is met</Text>
      ) : (
        <Text style={[styles.text, styles.errorText]}>Condition is not met</Text>
      )}
      <View>
        <Button title='Click here' onPress={()=>{setIsConditionMet(!isConditionMet)}}></Button>
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
  },
})

export default App
