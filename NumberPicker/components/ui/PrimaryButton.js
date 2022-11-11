import { View, Pressable, Text, StyleSheet } from "react-native"
import Colors from '../../constants/colors'


const PrimaryButton = ({text, onPress}) => {

    // const pressHandler = () => {
        
    // }

    return (
        <View style={styles.containerOuter}>
            <Pressable 
                onPress={onPress} 
                style={({pressed}) => 
                pressed 
                    ? [styles.containerInner, styles.pressed] 
                    : styles.containerInner}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    containerOuter: {
        borderRadius: 28, 
        margin: 4,
        overflow: 'hidden'
    }, 
    containerInner: {
        backgroundColor: Colors.primary3,
        paddingVertical:8,
        paddingHorizontal: 16,
    }, 
    buttonText:{
        textAlign: 'center',
        color: Colors.primary1,
    },
    pressed:{
        opacity: 0.75,
    }
})

export default PrimaryButton