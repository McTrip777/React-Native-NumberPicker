import { View, Pressable, Text, StyleSheet } from "react-native"
import Colors from '../../constants/colors'


const PrimaryButton = ({children, onPress}) => {

    return (
        <View style={styles.containerOuter}>
            <Pressable 
                onPress={onPress} 
                style={({pressed}) => 
                pressed 
                    ? [styles.containerInner, styles.pressed] 
                    : styles.containerInner}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    containerOuter: {
        flex:1,
        borderRadius: 28, 
        margin: 4,
        overflow: 'hidden',
    }, 
    containerInner: {
        backgroundColor: Colors.primary3,
        paddingVertical:8,
        paddingHorizontal: 16,
    }, 
    buttonText:{
        textAlign: 'center',
        color: Colors.primary1,
        fontSize: 20,
    },
    pressed:{
        opacity: 0.75,
    }
})

export default PrimaryButton