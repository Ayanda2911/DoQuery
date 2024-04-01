import React from "react";
import { View,  StyleSheet, Image} from "react-native";


export default function LogoTitle({navigation}){
    return (

        <View style={styles.container}>
            <Image source={require('../assets/icon.png')} style={{ width: 50, height: 50, marginTop: 50 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});