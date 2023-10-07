import {View, Text, Switch, StyleSheet} from 'react-native'
import {useState} from "react"
export default function App() {
  const [ligado,setLigado]=useState(false)
  const toggleValue=()=>{setLigado(!ligado)}
  return (
    <View style={styles.container}>
        {
          ligado ? <Text>Button activated!!!</Text>
          :
          <Text>Button not activated!!!</Text>
        }
        <Switch
        trackColor={{false:"red",true:"green"}}
        thumbColor={ligado ? 'blue':"#444"}
        value={ligado}
        onValueChange={toggleValue}
        />
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    alignItems: "center"
  }
})