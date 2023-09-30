import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import book from '../images/book2.jpg';


export default function BookCard({ image, title, author }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.bookCover} />
            {/* <View style={styles.card}> */}
            {/* </View> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    card: {
        // justifyContent: 'center',
        // alignItems: 'center',
        minWidth: 320,
        minHeight: 180,
        backgroundColor: '#D4ADFC',
        padding: 10,
        margin: 10,
        marginLeft: 35,
        borderRadius: 25,
        opacity: 0.9,
        shadowColor: "#5C469C",
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },

    bookCover: {
        width: 150,
        height: 200,
        margin: 10,
        borderRadius: 15

        // borderRadius: 10,
        // backgroundSize: 'fill',
        // backgroundPosition: 'center',
        // backgroundImage: `url(${book})`,
    },

    author: {
        fontSize: 16,
        color: '#777',
    },
})
