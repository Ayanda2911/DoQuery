import React, {useState} from "react";
import { SignUp} from "../services/auth";
import { View, Text,TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import AppStyles from "./AppStyles";


export default function Signup({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignUp = async () => {
        if (!email || !password || !verifyPassword) {
            alert("Please fill in all fields");
            return;
        }
        
        if (password !== verifyPassword) {
            alert("Passwords do not match");
            return;
        }
        
        setLoading(true); 
        const user = await SignUp(email, password );
        try { 
            if(user){
                const id = user.id; 
            }
        }catch (error){
            if (error.code === "auth/email-already-in-use") {
                alert("That email address is already in use!");
            }else if (error.code === "auth/invalid-email") {
                alert("That email address is invalid!");
            }
            else { 
                alert("An error occurred. Please try again.")
            }
        }     
    };

    const handleLogin = () => {
        navigation.navigate("Login");
    }; 

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={{ padding : 10, alignItems:'center', marginVertical: 20}}>
                <Text style={{fontFamily : 'PollerOne-Regular', fontSize : 20}}>Welcome to  DoQuery </Text>
            </View>
            <View style={styles.formContainer}>

                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                />

                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholder="Enter your password"
                />

                <Text style={styles.label}>Verify Password</Text>
                <TextInput
                    style={styles.input}
                    value={verifyPassword}
                    onChangeText={setVerifyPassword}
                    secureTextEntry
                    placeholder="Verify your password"
                />
                
                {
                    loading ? (<Text>Loading.. </Text>) : (
                        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                            <Text style={{color: "white", fontWeight: "bold", fontSize:18}}>Sign Up</Text>
                        </TouchableOpacity>  
                    )
                }
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text>Already have an account? Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    formContainer: {
        width: "80%",
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: AppStyles.input,
    button: AppStyles.button,
});