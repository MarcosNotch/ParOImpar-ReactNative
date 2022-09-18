import Screen from "../components/screen/screen";
import Title from "../components/Title";
import colors from "../constants/colors";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import CustomButton from "../components/CustomButton/CustomButton";

export default function GameScreen({number, setUserChoice}){


    const styles = StyleSheet.create({
        parrafo: {
            color: "#FFFF",
            fontSize: 20,
            fontFamily: "Roboto-Medium",
            marginTop: 10
        },
        buttonContainer: {
            flexDirection: "row"
        }
    })


    return(
        <Screen>
            <View>
                <Title text={"Elejiste el numero"}/>
                <Title text={number} estilos={{color: colors.accent}}/>
            </View>
            <View>
                <Text style={styles.parrafo}>Ahora decide...tu numero es Par o Impar?</Text>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton texto={"Par"} accion={e => {setUserChoice("Par")}}/>
                <CustomButton texto={"Impar"} accion={e => {setUserChoice("Impar")}}/>
            </View>
        </Screen>
    )


}