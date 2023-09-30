import React from 'react';
import { View, Text , StyleSheet, Pressable} from 'react-native';

const BookDetails = ({ route }) => {
  const { title, author, description } = route.params;

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>Title: {title}</Text>
        </View>
        <Text>Author: {author}</Text>
        <View style={StyleSheet.description}>
            <Text style={StyleSheet.description}>Description: {description}</Text>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#0C134F'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    description:{
        backgroundColor:'#5C469C',
        with:140,
    }
});

export default BookDetails;
