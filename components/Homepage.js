import react from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { logout } from "../services/auth";
import { useState } from "react";

export default function Homepage({navigation}){
    navigation.setOptions({
        headerShown: true,
        headerTitle: 'Home',
        headerStyle: {
            backgroundColor: '#FF8DC3',
            fontSize: 20,
            fontWeight: 'bold',
            padding:10,
            
        },
        headerLeft: () => (
            <Ionicons name="menu" size={50} color="black" onPress={() => setModal(true)} />
        ),
        headerRight: () => (
            <Ionicons name="log-out" size={50} color="black" onPress={handleLogout} />
        ),
        
    });
    const [modal, setModal] = useState(false);
    const handleLogout = () => {
        logout();
        navigation.navigate('Login');
    }
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                    setModal(!modal);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Ionicons name="close" size={24} color="white" onPress={() => setModal(false)} />
                        <Text style={styles.modalText} onPress={() => navigation.navigate('History')}>History</Text>
                    </View>
                </View>
            </Modal>
            <View style={styles.OptionsContainer}>
                <Text style={styles.title}>Building Confidence in the Gym </Text>
                <TouchableOpacity style={AppStyles.button} onPress={() => navigation.navigate('History')}><Text style={styles.Options}>Previous Workouts</Text></TouchableOpacity>
                <TouchableOpacity style={AppStyles.button} onPress={() => navigation.navigate('NameSearch')}><Text style={styles.Options}>Name Search</Text></TouchableOpacity>
                <TouchableOpacity style={AppStyles.button} onPress={() => navigation.navigate('PictureSearch')}><Text style={styles.Options}>Picture Search</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF8DC3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    OptionsContainer: {
        width: '80%',
        alignItems: 'center',
    },
    Options: {
        fontSize: 20, 
        fontWeight: 'bold',
        color: 'white',
    },
    menuBar: {
        alignSelf: 'flex-start',
        padding: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 8,
        width: '80%',
    },
    modalText: {
        color: 'white',
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
    },
});
