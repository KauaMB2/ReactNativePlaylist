import { Text, View,FlatList, StyleSheet } from 'react-native'
import Header from './../../components/Header'
import Balance from './../../components/Balance'
import Movements from './../../components/Movements'
import Actions from './../../components/Actions'

export default function Home() {
  const list=[
    {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: "17/09/2022",
    type: 0
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: "04/03/2022",
    type: 1
  },
  {
    id: 2,
    label: 'Pix Cliente Y',
    value: '2.500,00',
    date: "23/01/2022",
    type: 1 
  }
  ]
    return (
      <View style={styles.container}>
        <Header userName="Kauã Moreira"/>
        <Balance saldo="9.000,00" gastos="390,00"/>
        <Text style={styles.title}>Últimas Movimentações</Text>
        <Actions />
        <FlatList
        style={styles.list}
        data={list}//Define the data of the list. Each element inside the data array in "item."
        keyExtractor={(item)=>String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=><Movements data={item}/>}
        />
      </View>
    )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#fafafa",
  },
  list:{
    fontSize: 18,
    fontWeight: 'bold',
    margin:14,
  },
  title:{
    marginStart: 14,
    marginEnd: 14,
    fontWeight: 'bold',
  }
})