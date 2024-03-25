import React from "react";
import { View, Text,TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from "react-native";


export default function PictureSearch({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search by Picture</Text>
            
        </View>
    );
}; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF8DC3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        padding:10,
    },
});