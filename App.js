import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const App = () => {
  const [course, setCourse] = useState(null)
  const [config, setConfig] = useState("white")

  useEffect(() => {
    async function setupAsyncStorage() {
      // Store data
      await Storage('01', 'React Native')
      await Storage('02', 'Javascript')
      await Storage('03', 'C++')
      await Storage('04', 'HTML + CSS')
      await Storage('05', 'HTML')

      // Retrieve data
      const searchedCourse = await Search('04')
      setCourse(searchedCourse)

      // Remove an item
      await AsyncStorage_Courses.removeItem('03')

      // Set background color
      setStorageConfig('backGColor', 'white')
    }

    setupAsyncStorage()
  }, [])

  const Storage = async (key, value) => {
    await AsyncStorage.setItem(key, value)
  }

  const Search = async (key) => {
    const value = await AsyncStorage.getItem(key)
    return value
  }

  const setStorageConfig = (key, value) => {
    AsyncStorage.setItem(key, value)
    setConfig(value)
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: config }]}>
      <Text>Armazenamento local / Async-Storage</Text>
      <Text>Curso: {course}</Text>
      <Text style={{ color: '#444' }}>Configurações: {config}</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
