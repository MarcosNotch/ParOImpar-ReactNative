import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import StartGameScreen from './screens/StartGameScreen';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import FinalScreen from './screens/FinalScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});



export default function App() {

  const [fontsLoaded] = useFonts({
      'Roboto-Bold': require("./assets/fonts/Roboto-Bold.ttf"),
      'Roboto-Regular': require("./assets/fonts/Roboto-Regular.ttf"),
      'Roboto-Medium': require("./assets/fonts/Roboto-Medium.ttf")
  })

  const [userNumber, setUserNumber] = useState("")
  const [userChoice, setUserChoice] = useState("")



  let content =   <StartGameScreen confirmed={setUserNumber}/>
  if(userNumber){
    content = <GameScreen number={userNumber} setUserChoice={setUserChoice}/>
  }
  if(userChoice){
    content = <FinalScreen number={userNumber} userChoice={userChoice} setUserChoice={setUserChoice} confirmed={setUserNumber}/>
  }

  if(fontsLoaded){
    return (
      <View style={styles.container}>
        <Header />
        {content}
      </View>
    );
  }
}

