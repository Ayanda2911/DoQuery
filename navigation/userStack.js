import React from "react";

import Homepage from "../components/Homepage";
import PictureSearch from "../components/PictureSearch";
import ProcessImage from "../components/ProcessImage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function UserStack() {
    return (
        
            <Stack.Navigator screenOptions={{contentStyle: {backgroundColor: '#BCFD49'}}}>
                <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown : false }}/>
                <Stack.Screen name="PictureSearch" component={PictureSearch} options={{ headerShown : false }}/>
                <Stack.Screen name="ProcessImage" component={ProcessImage} options={{ headerShown : false }}/>
            </Stack.Navigator>
    );
}
