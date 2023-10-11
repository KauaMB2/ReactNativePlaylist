import {View, Image} from 'react-native'
const ImageContainer = ({styles}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/Tabela.png')} // Replace with the correct image path
        style={styles.image}
      />
    </View>
  )
}

export default ImageContainer