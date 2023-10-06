import {
  View, StyleSheet, Text, StatusBar,TouchableOpacity
} from 'react-native'
import {Feather} from "@expo/vector-icons"

const statusBarHeight=StatusBar.currentHeight ? StatusBar.currentHeight+22:66

export default function Header({userName}){
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{userName}</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#FFF"/>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    backgroundColor: '#8000ff',//Define the background color
    paddingTop:statusBarHeight,//Define the padding top
    flexDirection:'row',//Define the flex direction as a row(horizontal)
    paddingStart: 16,//Define the padding left
    paddingEnd: 16,//Define the padding right
    paddingBottom: 44,//Define the padding bottom
  },
  content:{
    flex:1,//Define the content size as 100% of the screen
    alignITems: 'center',//Align them in the same horizontal line
    flexDirection: 'row',//Define the flex direction as a row(horizontal)
    justifyContent: 'space-between',//Put a space between the elements
  },
  username:{
    fontSize: 18,//Define the font size
    color: "#FFF",//Define the font color
    fontWeight: 'bold',//Define the font weight 
  },
  buttonUser:{
    width: 44,//Define the button width
    height: 44,//Define the button height
    justifyContent: "center",//Put it in the vertical center
    alignItems: 'center',//put yt in the horizontal center
    backgroundColor: "rgba(255,255,255,0.5)",//define the abackground color
    borderRadius: 22,
  }
})