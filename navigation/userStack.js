import React from "react";

import Homepage from "../components/Homepage";
import PictureSearch from "../components/PictureSearch";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


export default function UserStack() {
    const Stack = createNativeStackNavigator();
    
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Homepage"
            component={Homepage}
            options={{
                headerShown: false,
            }}

            />
             <Stack.Screen
            name="PictureSearch"
            component={PictureSearch}
            options={{
                headerShown: false,
            }}
        />
        
        </Stack.Navigator>
       
        </NavigationContainer>
    );
    }