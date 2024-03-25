// if you are not signed in , this is what you have access to 

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
 
import Login from '../components/login';
import Signup from '../components/SignUp';
import LogoTitle from '../components/LogoTitle';


 export default function AuthStack() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="Login"
            component={Login}
            options={{
              headerBackground: () => <LogoTitle />,
              headerTitle: '',
              headerTransparent: true,
            }}
            />
            <Stack.Screen 
            name="SignUp"
            component={Signup}
            options={{
              headerShown: false,
              headerBackground: () => <LogoTitle />,
              headerTransparent: true,
            }}
        
            />
            
        </Stack.Navigator>
        </NavigationContainer>
    );} 