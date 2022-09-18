import { StyleSheet, Text} from 'react-native';


const styles = StyleSheet.create({

    title: {
        fontFamily: "Roboto-Bold",
        color: "#FFFF",
        fontSize: 30,
        textAlign: "center",
        marginTop: 10
    }

});



export default function Title({text, estilos}){

    return(
        <Text style={{...styles.title, ...estilos}}>{text}</Text>
    )


}