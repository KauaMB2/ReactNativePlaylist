import { View, Text, StyleSheet, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>CFB Cursos</Text>
      <Button title="Chanel screen" color="red" onPress={() => navigation.navigate("Chanel")} />
      <Button title="Courses screen" color="red" onPress={() => navigation.navigate("Courses")} />
    </View>
  )
}

const ChanelScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Chanel Screen</Text>
      <Text>CFB Cursos</Text>
      <Button title="Home" color="red" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

const CoursesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Click here to see about React Native course:</Text>
      <Button title="React Native" color="red" onPress={() => navigation.navigate("ReactNativeCourse", { lessons: 40, creator: "Kauã" })} />
    </View>
  )
}

const ReactNativeCourse = ({ route, navigation }) => {
  const { lessons, creator } = route.params

  return (
    <View style={styles.container}>
      <Text>React Native!</Text>
      <Text>Lessons: {lessons}</Text>
      <Text>Creator: {creator}</Text>
      <Button title="Home" color="red" onPress={() => navigation.navigate("Home")} />
      <Button title="Come back to courses" color="red" onPress={() => navigation.goBack()} />
    </View>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{
          title: "Home screen",
          headerStyle: {
            backgroundColor:"#008"
          },
          headerTintColor:"#fff",
          headerRight:()=>(
            <Button
            title="Cursos"
            color="#000"
            onPress={()=>{alert("Test button")}}
            />
          )
        }}/>
        <Stack.Screen name="Chanel" component={ChanelScreen} options={{ title: "Chanel screen" }} />
        <Stack.Screen name="Courses" component={CoursesScreen} options={{ title: "Courses screen" }} />
        <Stack.Screen name="ReactNativeCourse" component={ReactNativeCourse} options={{ title: "React Native screen" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

export default App
