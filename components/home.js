import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import logo from '../images/logo.png'
import bg from '../images/bg.png'


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Image source={bg} style={styles.logo} />
                <Text>Hello frend</Text>
            </View>
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
    navbar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    logo: {

    }
});