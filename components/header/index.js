import { StyleSheet, Text, View, Image} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center"
    },
    tinyLogo: {
       marginTop: 20,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
   
  });
  


export default function Header(){
    return (
        <View style={styles.container}>
            <Image style={styles.tinyLogo} source={require("./paroimpar.png")}/>
        </View>
    )
}