import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import book from '../images/book2.jpg';


export default function BookCard({ image, title, author }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={image} style={styles.bookCover} />
                {/* <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>{author}</Text> */}

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 10
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
        width: '100%', 
        height: '100%', 
        borderRadius: 10,
        flexDirection: 'row',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundImage: `url(${book})`,
    },
    
    author: {
        fontSize: 16,
        color: '#777',
    },
})
