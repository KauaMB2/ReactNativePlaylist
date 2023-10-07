import {View, Text, Modal, Button, StyleSheet} from 'react-native'
import {useState} from 'react'
export default function ModalComponent() {
  const [visibility, setVisibility]=useState(false)
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibility}
        >
        <View style={styles.modal}>
          <Text style={styles.text}>CFB Cursos</Text>
          <Text style={styles.text}>React Native</Text>
          <Button title="Close" onPress={()=>{setVisibility(false)}} />
        </View>
      </Modal>
      <View>
        <Text>Click in the button bellow:</Text>
        <Button color="blue" title="Open" onPress={()=>{setVisibility(true)}}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal:{
    backgroundColor: "black",
    width: "60%",
    marginStart: "20%",
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
  },
  text:{
    color: "white",
    fintSize: 20,
    fontWeight: "bold",
  }
})