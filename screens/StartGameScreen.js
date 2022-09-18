import colors from "../constants/colors";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import Screen from "../components/screen/screen";
import Title from "../components/Title";
import CustomButton from "../components/CustomButton/CustomButton";
import { useRef, useState } from "react";

const styles = StyleSheet.create({


  

    textInput: {
        borderColor: colors.accent,
        width: 200,
        height: 100,
        borderWidth: 1,
        marginTop: 20,
        color: "#FFFF",
        fontSize: 30
    }

  });
  

export default function StartGameScreen({confirmed}){

    let [numeroIngresado, setNumeroIngresado] = useState("");


    function validarNumero(){
        if(numeroIngresado > 0 && numeroIngresado !== NaN){
      
            confirmed(numeroIngresado)
        }
    }



    return(
        <Screen>
            <View>
                <Title text={"Ingresa Un Numero!"}/>
            </View>
            <View>
                <TextInput maxLength={5} onChangeText={numero => setNumeroIngresado(numero)}  textAlign="center" style={styles.textInput} keyboardType="numeric"/>
            </View>
            <View>
                <CustomButton texto={"Aceptar"} accion={validarNumero}/>
            </View>
        </Screen>
    )
}