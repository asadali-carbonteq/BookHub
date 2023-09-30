import React, { useState } from 'react';
import { ScrollView, TextInput, View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { addUser } from '../database/database';
import logo from '../images/logo.png'


const signupForm = ({ navigation }) => {
  const [username, onChangeUserName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [signInResult, setSignInResult] = useState("");

  const handleSignup = () => {
    const newuser = {
      username: username,
      password: password,
      email: email
    }
    if (addUser(newuser)) {
      setSignInResult("Sign Up Successful");
    } else {
      setSignInResult("Sorry there was some error");
    }
    ;
  }


  return (
    <View style={styles.container}>
      <Pressable style={styles.backBtn} onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.backBtnText}>Back</Text>
      </Pressable>
      <Image source={logo} style={styles.logo} />

      <Text style={styles.heading}>SignUP to  <span style={styles.headingSpan}>BookHub</span></Text>
      {/* <Text style={styles.secondaryText}>Enter User Name</Text> */}
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={onChangeUserName}
        placeholder='Enter Username'

      />
      {/* <Text style={styles.secondaryText}>Enter Your Email</Text> */}
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={onChangeEmail}
        placeholder='Enter Your Email'
        keyboardType={"email-address"}
      />
      {/* <Text style={styles.secondaryText}>Enter Your Password</Text> */}
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={onChangePassword}
        placeholder='Enter Your Password'
      />
      <Pressable
        style={styles.signupBtn}
        onPress={handleSignup}
        onPressIn={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>SignUP</Text>
      </Pressable>
      <Text style={{ color: "white" }}>{signInResult}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C134F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    // height:45,
    margin: 5,
    borderWidth: 2,
    padding: 25,
    fontSize: 16,
    borderColor: '#5C469C',
    color: '#D4ADFC',
    borderRadius: 30,
  },
  secondaryText: {
    padding: 10,
    color: '#D4ADFC',
    fontSize: 20,
    fontWeight: 300,
  },
  heading: {
    color: '#5C469C',
    fontSize: 30,
    marginBottom: 20,
  },
  headingSpan: {
    color: '#D4ADFC'
  },
  signupBtn: {
    padding: 10,
    paddingHorizontal: 20,
    margin: 10,
    marginTop: 30,
    backgroundColor: '#D4ADFC',
    color: '#5C469C',
    borderRadius: 40,
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
  buttonText: {
    fontSize: 20,
    color: '#5C469C',
    fontWeight: 900,
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

});

export default signupForm;