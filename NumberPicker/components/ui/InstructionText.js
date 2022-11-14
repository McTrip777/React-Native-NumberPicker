import { Children } from 'react';
import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

const InstructionText = ({children}) => {
    return (
        <Text style={styles.instructionText}>{children}</Text>
    );
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily:'open-sans',
        color: Colors.primary3, 
        fontSize: 24,
        paddingBottom: 10,
    },
})