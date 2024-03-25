import { Alert } from 'react-native';
import { AUTH } from './FirebaseConfig';
import { signInWithEmailAndPassword , createUserWithEmailAndPassword, signOut} from 'firebase/auth';

const auth = AUTH ; 
export const SignUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.log(error);
    }
};

export const emailVerification = async () => {
    const user = auth.currentUser;
    try {
        await auth.currentUser.sendEmailVerification(
            auth.currentUser.email, {
                handleCodeInApp: true,
                url: 'https://shystrength-8171f.firebaseapp.com',
            }).then(() => {
                console.log('Verification email sent');
                showEmailAlert(user.email); 
            });
    } catch (error) {
        console.log(error);
    }
}

const showEmailAlert = (email) => {
    Alert.alert(
        'Email Verification',
        `A verification email has been sent to ${email}. Please verify your email to continue.`,
        [
            {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
            },
        ],
        { cancelable: false }
    );
}; 

export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
        return user;
    } catch (error) {
        console.log(error.message);
    }
}

export const logout = async () =>{
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error);
    }
}