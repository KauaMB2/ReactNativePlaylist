import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'
import {useState} from 'react'

const TextInputExample = () => {
  const [text, onChangeText] = useState('Useless Text')
  const [number, onChangeNumber] = useState('')
  const [count, setCount]=useState(0)
  const handlePress=()=>{
    setCount((prevCount) => prevCount + 1)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>Normal keyboard:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text>Numeric keyboard:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Text>Counter: {count}</Text>
      <TouchableOpacity activeOpacity={0.2} style={styles.button} onPress={handlePress}><Text>Botão</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "green",
  },
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

export default TextInputExample