//IMRN Import elements
//RNSS Create stylesheet
//SLR  Create a function

import { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import * as SplashScreen from 'expo-splash-screen';

import Colors from './constants/colors'

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'

export default function App() {

  const [userNumber, setUserNumber] = useState()
  const [gameOver, setGameOver] = useState(true)
  const [roundsNumber, setRoundsNumber] = useState(0)
  
  const [fontsLoaded] = useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    <AppLoading  />
  }

  const pickedNumber = (picked) => {
    setUserNumber(picked)
    setGameOver(false)
  }

  const onGameOver = (guessArr) => {
    setGameOver(true)
    setRoundsNumber(guessArr)
  }
  
  const startNewGameHandler = () => {
    setUserNumber(null)
    setRoundsNumber(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumber}/>
  
  if(userNumber){
    screen = <GameScreen 
      userNumber = {userNumber} 
      onGameOver={onGameOver} 
    />
  }

  if(gameOver && userNumber){
    screen = <GameOverScreen 
      userNumber={userNumber} 
      roundsNumber={roundsNumber} 
      onStartNewGame={startNewGameHandler}
    />
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={[Colors.primary2, Colors.primary3, Colors.primary1]} onLayout={onLayoutRootView}>
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
