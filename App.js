import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <Text style={styles.textStyle1}>
        flexDirection: "row"
      </Text>
      <View style={styles.box}>
        <Text style={styles.textStyle2}>
          justifyContent: "flex-start"
        </Text>
        <View style={styles.bigContainer1}>
          <Text style={[styles.simpleContainer, styles.container1]}>1</Text>
          <Text style={[styles.simpleContainer, styles.container2]}>2</Text>
          <Text style={[styles.simpleContainer, styles.container3]}>3</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.textStyle2}>
          justifyContent: "flex-end"
        </Text>
        <View style={styles.bigContainer2}>
          <Text style={[styles.simpleContainer, styles.container1]}>1</Text>
          <Text style={[styles.simpleContainer, styles.container2]}>2</Text>
          <Text style={[styles.simpleContainer, styles.container3]}>3</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.textStyle2}>
          justifyContent: "space-between"
        </Text>
        <View style={styles.bigContainer3}>
          <Text style={[styles.simpleContainer, styles.container1]}>1</Text>
          <Text style={[styles.simpleContainer, styles.container2]}>2</Text>
          <Text style={[styles.simpleContainer, styles.container3]}>3</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.textStyle2}>
          justifyContent: "space-around"
        </Text>
        <View style={styles.bigContainer4}>
          <Text style={[styles.simpleContainer, styles.container1]}>1</Text>
          <Text style={[styles.simpleContainer, styles.container2]}>2</Text>
          <Text style={[styles.simpleContainer, styles.container3]}>3</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.textStyle2}>
          justifyContent: "center"
        </Text>
        <View style={styles.bigContainer5}>
          <Text style={[styles.simpleContainer, styles.container1]}>1</Text>
          <Text style={[styles.simpleContainer, styles.container2]}>2</Text>
          <Text style={[styles.simpleContainer, styles.container3]}>3</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    alignItems: "center",
  },
  box:{
    width: "80%",
    borderColor: "purple",
    borderWidth: 1,
    backgroundColor: "black",
    marginBottom: 10,
  },
  textStyle1:{
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
  },
  textStyle2:{
    fontWeight: "bold",
    fontSize: 10,
    color: "white",
  },
  simpleContainer:{
    width: 30,
    height: 30,
    color: "white",
  },
  bigContainer1:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "start",
  },
  bigContainer2:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "end",
  },
  bigContainer3:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bigContainer4:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bigContainer5:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  container1:{
    backgroundColor: "#00faaa",
  },
  container2:{
    backgroundColor: "#00daaa",
  },
  container3:{
    backgroundColor: "#00aaaa",
  },
})
