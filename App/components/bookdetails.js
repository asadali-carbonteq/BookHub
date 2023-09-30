import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import logo from "../images/book1.jpg"

const BookDetails = ({ route }) => {
    // const BookDetails = ({ route }) => {
    const { title, author, image, description } = route.params;

    return (


        <View style={styles.container}>
            <Pressable style={styles.backBtn} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.backBtnText}>Back</Text>
            </Pressable>
            <View style={styles.container}>
                <Image source={image} style={styles.bookCover} />

            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{author} </Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: "100%",
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: '#0C134F'
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
    bookCover: {
        margin: 10,
        width: 340,
        height: 300,
        position: 'absolute',
        top: 45,
        borderRadius: 15,
    },
    detailContainer: {
        // flex: 1,
        // justifyContent: 'space-between',
        color: '#D4ADFC',
        fontSize: 20,
        position: 'absolute',
        top: 360,
        margin: 20
    },
    title: {
        color: '#D4ADFC',
        fontSize: 20,
        marginBottom: 10

    },
    description: {
        color: '#D4ADFC',
        fontSize: 15,
        marginTop: 3

    }
});

export default BookDetails;
