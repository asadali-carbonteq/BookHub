import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, ImageBackground } from 'react-native';
import bg from '../images/bg.png'
import logo from '../images/logo.png'


export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.text}>Welcome to <span style={styles.textSpan}>BookHub</span></Text>
            <View style={styles.btnContainer}>
                <Pressable style={styles.continueBtn} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.continueBtnText}>Sign In</Text>
                </Pressable>
                <Pressable style={styles.continueBtn} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.continueBtnText}>Sign Up</Text>
                </Pressable>
            </View>
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
    btnContainer: {
        flexDirection: 'row'
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
        borderRadius: 40,

    },
    continueBtnText: {
        fontSize: 20,
        color: '#5C469C',
        fontWeight: 900,
    },
    background: {
        flex: 1,
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
    }
});




