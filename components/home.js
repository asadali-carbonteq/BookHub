import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import logo from '../images/logo.png'
import BookCard from './card';
import data from '../books.json'

export default function HomeScreen() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(data);
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.navText}>BookHub</Text>
            </View>
            <ScrollView style={styles.bookCard}>
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        image={book.image}
                    />
                ))}
            </ScrollView>

        </View >
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C134F',
        flexDirection: 'column'
    },
    navbar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: '#5C469C',
        width: '100%',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    },
    logo: {
        width: 100,
        height: 100,
        padding: 20,
        margin: 10,
    },
    navText: {
        color: '#D4ADFC',
        fontSize: 20,
        backgroundColor: '#5C469C'

    },
    bookCard: {
        marginTop: 130,
        padding: 10,
        // position: 'relative'

    }
});