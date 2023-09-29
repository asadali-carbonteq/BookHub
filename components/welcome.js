import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';


export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to <span style={styles.textSpan}>BookHub</span></Text>
            <Pressable style={styles.continueBtn}>
                <Text style={styles.continueBtnText}>Continue...</Text>
            </Pressable>
            <StatusBar style="auto" />
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
    text: {
        color: '#5C469C',
        fontSize: 30
    },
    textSpan: {
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
        fontSize: 25,
        color: '#5C469C',
        fontWeight: 900,
    }
});




