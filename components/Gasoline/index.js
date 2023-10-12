import { View, TextInput,Text } from 'react-native'

const Gasoline = ({styles, settingGasoline}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Digite o preço da Gasolina: </Text>
        <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={(text)=>{settingGasoline(text)}}
        ></TextInput>
    </View>
  )
}

export default Gasoline