import { TextInput, SafeAreaView,View, Text, StyleSheet, Alert, Button, TouchableHighlight } from 'react-native'
const HeightInput = ({setHeight, styles}) => {
  return (
    <View style={styles.block}>
      <Text>Informe sua altura: </Text>
      <TextInput
        style={styles.text}
        autoFocus={false}
        keyboardType={'numeric'}
        onChangeText={(text)=>{setHeight(text)}}
      >
      </TextInput>
    </View>
  )
}

export default HeightInput
