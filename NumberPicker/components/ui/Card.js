import { View, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

const Card = ({children}) => {
    return (
        <View style = {styles.inputContainer}>
            {children}
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    inputContainer:{
        alignItems: 'center',
        marginTop: 30,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary4,
        borderRadius: 8,
        shadowColor: Colors.primary2, 
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.75, 
        shadowRadius: 6,
    }, 
})