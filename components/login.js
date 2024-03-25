import React, { useState } from "react";
import { login, logout } from "../services/auth";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import AppStyles from './AppStyles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('Enter Your Email Here');
  const [password, setPassword] = useState('Enter Your Password Here');
  const [loading, setLoading] = useState(false);

  const loginHandler = async () => {
    setLoading(true);
    try {
      const user = await login(email, password );
      if (user) {
        const id = user.id;
        navigation.navigate('Homepage');
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      // Add error handling logic here
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={{ width: '80%' }}>
        <View style={{ padding: 10, alignItems: 'center', marginVertical: 20 }}>
          <Text style={{ fontFamily: 'Lobster-Regular', fontSize: 25 }}>Welcome to ShyStrength </Text>
        </View>

        <Text> Enter Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
        ></TextInput>
        <Text> Enter Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry
        ></TextInput>
        <View style={styles.SignUpContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={loginHandler }
          >
            <Text style={{color: "white", fontWeight: "bold", fontSize:18}}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { navigation.navigate('SignUp') }}
          >
            <Text style={{color: "white", fontWeight: "bold", fontSize:18}}> Sign up</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
    top: 100,
    width: '100%',
  },
  input: {
    backgroundColor: '#ADF9F7',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  button: AppStyles.button,
  SignUpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
