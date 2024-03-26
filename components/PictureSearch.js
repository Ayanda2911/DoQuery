import React, { useState, useEffect } from "react";
import { View,StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';


export default function PictureSearch({navigation}){
    navigation.setOptions({
        headerShown: true,
        headerTransparent: true,
        headerTitle:'', 
        headerLeft: () => ( 
            <Ionicons name='chevron-back-outline' size={40} color='white' onPress={() => navigation.goBack()} style={{paddingBottom: 5}} />
        )
    });


    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasCameraPermission, setHasCameraPermission] = useState(null);

    useEffect(() => {
        (async () => {
          const cameraStatus = await Camera.requestCameraPermissionsAsync();
          setHasCameraPermission(cameraStatus.status === 'granted');
    })();
      }, []);
    
      const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            navigation.navigate('ProcessImage', {imageURI: image});
          }
    }
    

    const takePicture = async () => {
        if(camera){
            const data = await camera.takePictureAsync(null)
            setImage(data.uri);
            navigation.navigate('ProcessImage', {imageURI: data.uri});
        }
      }

    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
      }
    return (
        <View style={styles.cameraContainer}>
            <Camera
                style={styles.camera}
                type={type}
                ref={(ref) => setCamera(ref)}
            />
            <View style={styles.cameraOptions}>
                <TouchableOpacity
                    onPress={pickImage}
                >
                    <View style={styles.imageHolder}>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={takePicture}
                ><Ionicons name='radio-button-on-outline' size={100} color='white' />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setType(
                        type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    )}><Ionicons name='sync-outline' size={50} color='white'></Ionicons></TouchableOpacity>
            
            </View>
        </View>
    );
}; 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF8DC3',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }, 
    cameraContainer: {
        paddingVertical: 10, 
        flex: 2,
        flexDirection: 'column',
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    camera: {
        height: '70%',
        marginVertical: 10,
        paddingVertical: 10, 
    },
    cameraOptions: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    button: {
        borderRadius: 5,
        color: 'white',
    },
    imageHolder: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        borderRadius: 10, 
    }
});