import { View, TextInput, Pressable, StyleSheet, Alert } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import { useState } from 'react';
import Colors from '../constants/colors'

const StartGameScreen = ({onPickNumber}) => {

    const [enteredNumber, setEnteredNumber] = useState('')


    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText)
    }

    const resetInput = () => {
        setEnteredNumber('')
    }

    const confirmInput = () => {
        const chosenNumber = parseInt(enteredNumber)

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert("Invalid Number",
                "Please choose a number between 1-99", 
                [{ text: "Close", style: 'destructive', onPress: resetInput}])
            return;
        }
        onPickNumber(chosenNumber)
    }

    return (
        <View style = {styles.inputContainer}>
            <TextInput 
                style = {styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.inputButtons}>
                <View style={styles.flexOne}>
                    <PrimaryButton text="Reset" onPress={resetInput}/>
                </View>
                <View style={styles.flexOne}>
                    <PrimaryButton text="Submit" onPress={confirmInput}/>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer:{
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary4,
        borderRadius: 8,
        shadowColor: Colors.primary2, 
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.75, 
        shadowRadius: 6,
    }, 
    numberInput: {
        height: 50, 
        width: 60,
        fontSize: 32,
        borderBottomColor: Colors.primary1,
        borderBottomWidth: 2,
        color: Colors.primary3,
        marginVertical: 8, 
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputButtons: {
        flexDirection: 'row',
    },
    flexOne:{
        flex: 1
    }
})