
import { StyleSheet, Text, View, Image} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "center",
        justifyContent: "center"
    }
  });
  

export default function Screen({children, style}){

    return(
        <View style={{...styles.screen, ...style}}>
            {children}
        </View>

    )
}