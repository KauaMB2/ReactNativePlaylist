import { TextInput,View, Text } from 'react-native'

const WeightInput = ({setWeight, styles}) => {
  return (
      <View style={styles.block}>
        <Text>Informe seu peso: </Text>
        <TextInput
          style={styles.text}
          autoFocus={true}
          keyboardType={'numeric'}
          onChangeText={(text)=>{setWeight(text)}}
        >
        </TextInput>
      </View>
  )
}


export default WeightInput
