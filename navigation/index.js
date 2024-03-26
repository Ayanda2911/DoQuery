import React from "react";
import  {AUTH } from "../services/FirebaseConfig";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {NavigationContainer} from "@react-navigation/native";

import UserStack from "./userStack";
import AuthStack from "./authStack";


export default function RootNavigation() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(AUTH, (user) => {
            setUser(user);
        });
    }, []);
    

    return <NavigationContainer>{user ? <UserStack /> : <AuthStack/>}</NavigationContainer>;
}