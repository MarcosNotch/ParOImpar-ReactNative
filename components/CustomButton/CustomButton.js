import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';


const styles = StyleSheet.create({

    boton: {
        backgroundColor: colors.accent,
        width: 100,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        margin: 20
    },
    texto: {
        color: "#FFFF",
        fontSize: 18,
        fontFamily: "Roboto-Bold",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5
    }

  });



export default function CustomButton({texto, accion}){

    return (
        <TouchableOpacity style={styles.boton} onPress={accion}>
            <Text sh style={styles.texto}>{texto}</Text>
        </TouchableOpacity>
    )


}