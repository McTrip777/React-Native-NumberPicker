import { View,StyleSheet, Text, Button, Alert, FlatList } from "react-native"
import Title from "../components/ui/Title"
import { useState, useEffect } from "react"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/ui/PrimaryButton"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
import {Ionicons} from '@expo/vector-icons'
import GuessLogItem from "../components/game/GuessLogItem"

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
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  useEffect(() => {
    if(userNumber === currentGuess){
      onGameOver(guessRounds.length)
    }
  }, [userNumber, currentGuess, onGameOver])

  useEffect(() => {
    min = 1, max = 100
  }, [])

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
      setGuessRounds(prevGuessRounds => [newRandNum, ...prevGuessRounds])
  }

  return (
    <View style={styles.screen}>
      <Title text="Opponent's Guess"/>
        {/* <Text style={styles.title}></Text> */}
        <NumberContainer text={currentGuess}/>
        <Card>
          <InstructionText>Higher or Lower?</InstructionText>
          <View style={styles.highLowButtons}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')} >
              <Ionicons name="md-remove" size={24}/>
            </PrimaryButton>
            <PrimaryButton onPress={() => nextGuessHandler('higher')} >
              <Ionicons name="md-add" size={24}/>
            </PrimaryButton>
          </View>
        </Card>
        <View style={styles.guessTagsContainer}>
          {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
          <FlatList 
            data={guessRounds}
            renderItem={itemData => <GuessLogItem guess={itemData.item} roundNumber={guessRounds.length - itemData.index}/>}
            keyExtractor={(item) => item}
          />
        </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen:{
    flex:1, 
    padding: 20,
    alignItems: "center"
  }, 
  highLowButtons:{
    flexDirection: "row",
  },
  guessTagsContainer:{
    flex:1,
    marginTop: 40,
    padding: 16,
  }
})
