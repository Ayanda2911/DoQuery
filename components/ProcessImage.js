import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default function ProcessImage({ navigation, route }) {
    useEffect(() => {
    navigation.setOptions({
        headerShown: true,
        headerTitle: 'Preview Image',
        headerStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10,
        },
        headerTransparent: true,
    })}, []);
    const [results, setResults] = useState(null);
    const { imageURI } = route.params;

    const handleContinue = () => {  
        navigation.navigate('Workouts');
    }


    return (
        <View style={styles.container}>
                <Image source={{uri: imageURI}} style={styles.image} />
                <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('PictureSearch')}
                >
                    <Text style={styles.buttonText}>Retake</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleContinue}
                >
                    <Text style={styles.buttonText}>Continue </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
    

}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    image: {
        flex: 2,
        width: '80%',
        height: '50%',
        borderRadius: 10, 
        marginTop: 20,
        top: 60,
    },
    buttonContainer: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '80%',
    },
    button: {
        padding: 10,
        backgroundColor: 'black',
        borderRadius: 5,
        width: '40%',
        margin: 20, 
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        alignSelf: 'center',
    },

});
