import { View, Text,TouchableHighlight } from 'react-native'

const BtnComponent = ({result, calcImc, styles}) => {
  return (
      <View>
        <View>
          <TouchableHighlight
            style={styles.btnCalc}
            onPress={calcImc}
          >
            <Text style={styles.textBtn}>Calcular IMC</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.block}>
          <Text>Resultado: {result}</Text>
        </View>
      </View>
  )
}
export default BtnComponent
