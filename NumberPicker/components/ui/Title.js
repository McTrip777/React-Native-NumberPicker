import { Text, View, StyleSheet } from "react-native"
import Colors from '../../constants/colors'

const Title = ({text}) => {
  return (
    <View style={styles.titleContainer}>
        <Text style={styles.title}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    titleContainer:{

    }, 
    title: {
        fontFamily: 'open-sans-bold', 
        fontSize: 24,
        color: Colors.primary1, 
        textAlign: "center", 
        borderWidth: 2,
        padding: 12,
        borderColor: Colors.primary1, 
        maxWidth: '80%', 
      }
})

export default Title
