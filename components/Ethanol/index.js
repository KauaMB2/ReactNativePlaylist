import { View, TextInput, Text } from 'react-native'

const Ethanol = ({styles, settingEthanol}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Digite o preço do Ethanol: </Text>
        <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={(text)=>{settingEthanol(text)}}
        ></TextInput>
    </View>
  )
}

export default Ethanol