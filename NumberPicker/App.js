import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from './constants/colors'

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'

export default function App() {

  const [userNumber, setUserNumber] = useState()
  const [gameOver, setGameOver] = useState(true)
  
  const pickedNumber = (picked) => {
    setUserNumber(picked)
    setGameOver(false)
  }

  const onGameOver = () => {
    setGameOver(true)
  }
  
  let screen = <StartGameScreen onPickNumber={pickedNumber}/>
  
  if(userNumber){
    screen = <GameScreen userNumber = {userNumber} onGameOver={onGameOver}/>
  }

  if(gameOver && userNumber){
    screen = <GameOverScreen />
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={[Colors.primary2, Colors.primary3, Colors.primary1]}>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        >
        <StatusBar status = "dark"/>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  backgroundImage:{
    opacity:.15,
  }
});
