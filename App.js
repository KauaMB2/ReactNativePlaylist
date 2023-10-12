import { SafeAreaView, Alert, StyleSheet } from 'react-native'
import { useState } from "react"
import Gasoline from "./components/Gasoline"
import Ethanol from "./components/Ethanol"
import BtnCalc from './components/BtnCalc'
import Result from './components/Result'

const App = () => {
  const [gasoline,setGasoline]=useState(0)
  const [ethanol, setEthanol]=useState(0)
  const [result, setResult]=useState("")
  const calc=()=>{
    if(!gasoline || gasoline==0){
      Alert.alert("ALERTA!", "Informe o preço da gasolina.")
      return
    }
    if(!ethanol || ethanol==0){
      Alert.alert("ALERTA!", "Informe o preço do etanol.")
      return
    }
    let res
    let calc=((ethanol/gasoline)*100).toFixed(1)
    if(calc>70){
      res="Gasolina"
    }else{
      res="Etanol"
    }
    setResult(res)
    Alert.alert("Resultado",`O etanol está custando ${calc}% da gasolina. Portanto, portanto, é melhor abastecer com ${res}`)
  }
  const clear=()=>{
    setResult('')
  }
  const settingGasoline=(value)=>{
    clear()
    setGasoline(value)
  }
  const settingEthanol=(value)=>{
    clear()
    setEthanol(value)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Gasoline styles={styles} settingGasoline={settingGasoline}/>
      <Ethanol styles={styles} settingEthanol={settingEthanol}/>
      <BtnCalc styles={styles} calc={calc}/>
      <Result styles={styles} result={result}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    padding: 10
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    borderRadius: 10
  },
  btnTxt: {
    textTransform: 'uppercase',
    fontSize: 20,
    color: "white"
  },
  btn:{
    backgroundColor: '#b00',
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    padding: 15
  },
  container: {
    padding: 10,
    paddingTop: 20
  },
  centerImg:{
    justifyContent: "center",
    alignItems: "center"
  }
})

export default App
