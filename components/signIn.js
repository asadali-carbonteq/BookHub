import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Pressabl, TextInput } from "react-native";


export default function SignInScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Please Sign In to Use the Application.</Text>
            <Text style={styles.secondaryText}>Enter Email</Text>
            <TextInput style={styles.textInput}></TextInput>
            <Text style={styles.secondaryText}>Enter Password</Text>
            <TextInput style={styles.textInput}></TextInput>
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
        fontSize: 20,
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

    }
})