import {
  View, StyleSheet, Text, StatusBar,TouchableOpacity
} from 'react-native'

export default function Balance({saldo,gastos}) {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.itemTitle}>Saldo</Text>
          <View style={styles.content}>
            <Text style={styles.correncySymbol}>R$</Text>
            <Text style={styles.balance}>{saldo}</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemTitle}>{gastos}</Text>
          <View style={styles.content}>
            <Text style={styles.correncySymbol}>R$</Text>
            <Text style={styles.expenses}>390,00</Text>
          </View>
        </View>
      </View>
    )
}
const styles=StyleSheet.create({
  container:{
    backgroundColor: "#FFF",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingend: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
  },
  itemTitle:{
    fintSize: 20,
    color: "#DADADA",
  },
  content:{
    flexDirection:"row",
    color: "#e74c3c",
  },
  correncySymbol:{
    marginRight: 6,
    color: "#DADADA",
  },
  balance:{
    fontSize: 22,
    color: "#2ecc71"
  },
  expenses:{
    fontSize: 22,
    color: "#e74e3c"
  }
})