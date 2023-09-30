import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image, TextInput } from "react-native";
import { checkCredentials } from "../database/database"; // Assuming this function checks credentials
import logo from '../images/logo.png'


export default function SignInScreen({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [signInResult, setSignInResult] = useState("");

    const handleSignIn = () => {
        const user = checkCredentials(username, password);

        if (user) {
            setSignInResult("Sign In Successful");
            navigation.navigate('Home');
        } else {
            setSignInResult("Your username or password is incorrect");
        }

        setPassword("");
    };

    return (
        <View style={styles.container}>
            <Pressable style={styles.backBtn} onPress={() => navigation.navigate('Welcome')}>
                <Text style={styles.backBtnText}>Back</Text>
            </Pressable>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.mainText}>Please Sign In to Use the Application.</Text>
            <Text style={styles.secondaryText}>Enter Username</Text>
            <TextInput
                style={styles.textInput}
                value={username}
                onChangeText={(text) => setUsername(text)}
            ></TextInput>
            <Text style={styles.secondaryText}>Enter Password</Text>
            <TextInput
                style={styles.textInput}
                value={password}
                onChangeText={(text) => setPassword(text)}
            ></TextInput>
            <Pressable
                style={styles.continueBtn}
                onPress={handleSignIn}
            >
                <Text style={styles.continueBtnText}>Sign In</Text>
            </Pressable>
            <Text style={{ color: "white" }}>{signInResult}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C134F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        color: '#D4ADFC',
        fontSize: 15,
        fontWeight: 400,
        marginBottom: 50,
    },
    secondaryText: {
        margin: 10,
        padding: 10,
        color: '#D4ADFC',
        fontSize: 20,
        fontWeight: 300,
    },
    textInput: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#5C469C',
        borderRadius: 30,
        padding: 8,
        color: '#D4ADFC'

    },
    continueBtn: {
        padding: 10,
        paddingHorizontal: 20,
        margin: 10,
        marginTop: 30,
        backgroundColor: '#D4ADFC',
        color: '#5C469C',
        borderRadius: 40
    },
    continueBtnText: {
        fontSize: 20,
        color: '#5C469C',
        fontWeight: 900,
    },
    background: {
        flex: 1,
        // width: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        padding: 20,
        margin: 10,

        shadowColor: '#D4ADFC',
        shadowOpacity: '0.5',
        shadowRadius: 10,
        shadowOffset: {
            height: 1,
            width: 1,
        }
    },
    backBtn: {
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 10,
        padding: 10,
    },
    backBtnText: {
        color: '#D4ADFC',
        fontSize: 15,
        fontWeight: 400
    },
})