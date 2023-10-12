import { View, Text, Image } from 'react-native'
import GasolinePNG from './../../assets/Gasoline.png'
import EthanolPNG from './../../assets/Ethanol.png'


const BtnCalc = ({styles, result}) => {
    const hashImg={
        "Gasolina":GasolinePNG,
        "Etanol": EthanolPNG
    }
    return (
        <View style={styles.container}>
            <Text>Resultado: {result}</Text>
            {result !== '' ? (
                <View style={styles.centerImg}>
                    <Image
                    source={hashImg[result]}
                    />
                </View>
            ) : null}
        </View>
    )
}

export default BtnCalc
