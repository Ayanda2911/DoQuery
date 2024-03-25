// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, initializeAuth, getReactNativePersistence} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1BmzvXvuIrw35lksx9SZd0KACLs30qoE",
  authDomain: "shystrength-8171f.firebaseapp.com",
  projectId: "shystrength-8171f",
  storageBucket: "shystrength-8171f.appspot.com",
  messagingSenderId: "586955135229",
  appId: "1:586955135229:web:f2d9b8f133870f832c8694",
  measurementId: "G-S12FBREZX9"
};

// Initialize Firebase
export const  APP  = initializeApp(firebaseConfig);
export const AUTH = initializeAuth(APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const db = getFirestore(APP); 
