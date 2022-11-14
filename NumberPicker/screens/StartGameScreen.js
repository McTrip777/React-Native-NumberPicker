import { View, TextInput, Pressable, StyleSheet, Alert, Text } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import Title from "../components/ui/Title";
import { useState } from 'react';
import Colors from '../constants/colors'
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

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
        <View style={styles.rootContainer}>
            <Title text="Guess My Number"/>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput 
                    style = {styles.numberInput} 
                    maxLength={2} 
                    keyboardType="number-pad"
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.inputButtons}>
                    <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
                    <PrimaryButton onPress={confirmInput}>Submit</PrimaryButton>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex:1, 
        marginTop: 100, 
        alignItems: "center"
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
})