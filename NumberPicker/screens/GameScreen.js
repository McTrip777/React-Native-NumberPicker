import { View,StyleSheet, Text, Button, Alert } from "react-native"
import Title from "../components/ui/Title"
import { useState, useEffect } from "react"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/ui/PrimaryButton"

const generateRandomNumber = (min, max, exclude) => {
  const rand = Math.floor(Math.random()* (max-min)) + min
  
  if(rand === exclude){
    return generateRandomNumber(min, max, exclude)
  }else{
    return rand
  }
}

let min = 1, max = 100

const GameScreen = ({userNumber, onGameOver}) => {
 
  const initialGuess = generateRandomNumber(1,100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(() => {
    if(userNumber === currentGuess){
      onGameOver()
    }
  }, [userNumber, currentGuess, onGameOver])

  const nextGuessHandler = (direction) => {

    if(
      (direction === 'lower' && userNumber > currentGuess) || 
      (direction === 'higher' && userNumber < currentGuess)){
        Alert.alert('LIES!!!', "Give the computer a chance", [{text: "Make better choices", style: 'destructive'}])
        return;
      }
      if(direction === 'lower'){
        max = currentGuess
      }else if (direction === 'higher'){
        min = currentGuess + 1
      }
        const newRandNum = generateRandomNumber(min, max, currentGuess)
        setCurrentGuess(newRandNum)
  }

  return (
    <View style={styles.screen}>
      <Title text="Opponent's Guess"/>
        <Text style={styles.title}></Text>
        <NumberContainer text={currentGuess}/>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler('lower')} text="-"/>
          <PrimaryButton onPress={() => nextGuessHandler('higher')} text="+"/>
        </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen:{
    flex:1, 
    padding: 20,
  }, 
  
})
