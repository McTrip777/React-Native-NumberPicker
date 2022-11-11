import { View, Text, StyleSheet } from "react-native"
import Colors from '../../constants/colors'

const NumberContainer = ({text}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{text}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primary2,
        padding: 16,
        borderRadius: 8, 
        margin: 24,
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: Colors.primary1
    },
    numberText: {
        color: Colors.primary2, 
        fontSize: 44, 
        fontWeight: 'bolder'
    }    
})