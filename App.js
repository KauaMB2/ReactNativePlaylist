
import { SafeAreaView,Text, StyleSheet, Alert } from 'react-native'
import { useState } from 'react'
import HeightInput from './components/HeightInput'
import WeightInput from './components/WeightInput'
import BtnComponent from './components/BtnComponent'
import ImageContainer from './components/ImageContainer'

const App = () => {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [result, setResult] = useState(0)

  const calcImc = () => {
    if (weight == 0 || !weight) {
      Alert.alert("Alerta!", "Peso vazio!")
    }
    if (height == 0 || !height) {
      Alert.alert("Alerta!", "Altura vazia!")
    }
    const r = weight / (Math.pow(height, 2))
    setResult(r.toFixed(2))
  }

  return (
    <SafeAreaView style={styles.body}>
      <Text>Calculadora de IMC: </Text>
      <HeightInput setHeight={setHeight} styles={styles} />
      <WeightInput setWeight={setWeight} styles={styles}/>
      <BtnComponent result={result} calcImc={calcImc} styles={styles}/>
      <ImageContainer styles={styles}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    padding: 10,
  },
  block: {
    marginBottom: 20,
  },
  text: {
    width: '100%',
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    borderRadius: 10,
  },
  btnCalc: {
    backgroundColor: "#048",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
  },
  textBtn: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: "#fff",
  },
  container: {
    marginTop: 90,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: "80%",
    height: 200,
  }
})

export default App
