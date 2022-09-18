
import Screen from "../components/screen/screen"
import Title from "../components/Title"
import {View } from 'react-native';
import CustomButton from "../components/CustomButton/CustomButton";

export default function FinalScreen({number, userChoice, confirmed, setUserChoice}){

    
    let titulo= ""

    if(number%2 === 0){
        if( userChoice === "Par"){
            titulo = "Felicidades, has GANADO!!!";
        }else{
            titulo = "Has perdido..."
        }
    }else{
        if( userChoice === "Impar"){
            titulo = "Felicidades, has GANADO!!!";
        }else{
            titulo = "Has perdido..."
        }
    }


    const restart = () => {
        confirmed("")
        setUserChoice("")
    }


    return(
        <Screen>
            <View>
                <Title text={titulo}/>
            </View>
            <View>
                <CustomButton accion={restart} texto={"Reiniciar"}/>
            </View>
        </Screen>
    )
}