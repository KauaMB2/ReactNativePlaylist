import { FlatList, View, Text, TouchableOpacity,Alert } from "react-native"
import styles from "./../../styles/style.js"

export default function(){
    const products = [
        {
          id: '1',
          name: 'Product 1',
          description: 'Description of Product 1',
          price: '$10.99',
        },
        {
          id: '2',
          name: 'Product 2',
          description: 'Description of Product 2',
          price: '$19.99',
        },
        {
          id: '3',
          name: 'Product 3',
          description: 'Description of Product 3',
          price: '$5.99',
        },
        {
          id: '4',
          name: 'Product 4',
          description: 'Description of Product 4',
          price: '$29.99',
        },
        {
          id: '5',
          name: 'Product 5',
          description: 'Description of Product 5',
          price: '$14.99',
        },
        {
          id: '6',
          name: 'Product 6',
          description: 'Description of Product 6',
          price: '$9.99',
        },
        {
          id: '7',
          name: 'Product 7',
          description: 'Description of Product 7',
          price: '$7.99',
        },
        {
          id: '8',
          name: 'Product 8',
          description: 'Description of Product 8',
          price: '$24.99',
        },
        {
          id: '9',
          name: 'Product 9',
          description: 'Description of Product 9',
          price: '$11.99',
        },
        {
          id: '10',
          name: 'Product 10',
          description: 'Description of Product 10',
          price: '$15.99',
        },
      ]
    const showAlert=(item)=>{
        Alert.alert(`${item.name} - ${item.price}`,`${item.description}`)
    }
    return(
        <View>
            <FlatList data={products} keyExtractor={(item)=>{item.id}} 
            renderItem={({ item }) => (
                <TouchableOpacity activeOpacity={0.4} style={styles.item} onPress={()=>{showAlert(item)}}>
                  <Text>{item.name} - Valor: {item.price}</Text>
                </TouchableOpacity>
              )}
            />
        </View>
    )
}