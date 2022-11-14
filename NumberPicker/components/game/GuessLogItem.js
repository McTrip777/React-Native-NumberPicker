import { Text, StyleSheet, View } from 'react-native'
import Colors from '../../constants/colors';

const GuessLogItem = ({roundNumber, guess}) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.guessText}>#{roundNumber}</Text>
            <Text style={styles.guessText}>Opponent's Guess: {guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary4, 
        borderWidth: 1, 
        borderRadius: 40, 
        padding: 12, 
        marginVertical: 8, 
        backgroundColor: Colors.primary3, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '100%', 
        shadowColor: Colors.primary4, 
        shadowOffset: {width: 0, height: 0}, 
        shadowOpacity: .25, 
        shadowRadius: 10
    },
    guessText:{
        color: Colors.primary1, 
        fontFamily: 'open-sans-bold',
    }
})