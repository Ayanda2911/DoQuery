import react from "react";
import { View,  StyleSheet} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function LogoTitle({navigation}){
    return (

        <View style={styles.container}>
            <Ionicons name='barbell-outline' size={80} color='black'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
});