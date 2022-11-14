import { View,Text, Image, StyleSheet } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import Title from "../components/ui/Title"
import Colors from "../constants/colors"

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title text="Game Over"/>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/success.png')} style = {styles.image}/>
      </View>
      <View>
        <Text style={styles.summaryText}>Your phone needed 
          <Text style={styles.highlight}> {roundsNumber} </Text> 
          rounds to guess the number 
          <Text style={styles.highlight}> {userNumber} </Text>
        </Text>
      </View>
      <View style={styles.startOverContainer}>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1, 
    padding: 24, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  imageContainer:{
    width: 300,
    height: 300, 
    borderWidth: 5, 
    borderRadius: 150,
    borderColor: Colors.primary2,
    overflow: "hidden",
    margin: 36
  }, 
  image:{
    width: '100%',
    height: '100%'
  }, 
  summaryText:{
    fontFamily: 'open-sans', 
    fontSize: 24,
    textAlign: "center",

  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary5 
  }, 
  startOverContainer:{
    flexDirection: "row",
    margin: 48
  }


})