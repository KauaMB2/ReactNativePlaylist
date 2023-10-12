import { View, Text, TouchableHighlight } from 'react-native';

const BtnCalc = ({styles, calc}) => {
  return (
    <View style={styles.container}>
        <TouchableHighlight
            style={styles.btn}
            onPress={calc}
        ><Text style={styles.btnTxt}>Calcular</Text></TouchableHighlight>
    </View>
  )
}

export default BtnCalc
