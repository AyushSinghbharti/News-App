import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [Email, SetEmail] = useState('');
    const [Password, SetPassword] = useState('');
    const [ShowPassword, SetShowPassword] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home")
            }
        })
        return unsubscribe;
    }, [])

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(Email, Password)
            .then(userCredentials => {
                const user = userCredentials.user;
                navigation.navigate("Home")
                console.log('Logged in with: ', user.email);
            })
            .catch(error => alert(error.message))
    }

    const handleGuestLogin = () => {
        navigation.navigate("Home");
        alert("You Logged in as guest")
    }

    return (
        <KeyboardAvoidingView style={styles.mainScreen} behavior='height'>
            <Image
                style={[{ height: 143, width: 275, marginBottom: 15, borderRadius: 20 }]}
                source={{
                    uri: 'https://a.storyblok.com/f/47007/1201x628/6142f06af0/how-to-build-a-news-app.png'
                }}
            />
            <View>
                <TextInput
                    placeholder='Enter Email Here'
                    value={Email}
                    onChangeText={SetEmail}
                    style={[styles.input]}
                />
            </View>
            <View style={[styles.input, { flexDirection: 'row' }]}>
                <TextInput
                    placeholder='Enter Password'
                    value={Password}
                    onChangeText={SetPassword}
                    secureTextEntry={ShowPassword}
                    style={[{ flex: 1 }]}
                />
                <TouchableOpacity onPress={() => SetShowPassword(!ShowPassword)} style={{paddingLeft: 20}}>
                    {ShowPassword ? <AntDesign name="eye" size={26} color="black" /> : <Entypo name="eye-with-line" size={26} color="black" />}
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={[{ flexDirection: 'row', marginTop: 3}]}>
                    <TouchableOpacity style={[{ flex: 1 }]} onPress={handleGuestLogin}>
                        <Text style={[styles.BelowButtonText, { flex: 1 }]}>Continue as a guest</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('RegistrationScreen')}>
                        <Text style={[styles.BelowButtonText]}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView >
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        // backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 75,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        padding: 10,
        margin: 10,
        width: 275,
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 0.75,
    },
    buttonContainer: {
        width: 275,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    BelowButtonText: {
        fontSize: 15,
        padding: 5,
        paddingTop: 3,
        color: '#0782F9',
        fontWeight: 500,
    }
})