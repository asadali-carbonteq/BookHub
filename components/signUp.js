import React,{ useState} from 'react';
import { ScrollView, TextInput,View, Text, StyleSheet, Pressable } from 'react-native';

const signupForm = () => {
  const[username, onChangeUserName] = useState('');
  const[email, onChangeEmail] = useState('');
  const[password, onChangePassword] = useState('');
  const handleSignup=()=>{
    const newuser ={
        username: username,
        password: password,
        email: email
    }
    
    addUser(newuser);
  }


  return(
    <View style ={styles.container}>
      <Text style={styles.heading}>SignUP to  <span style={styles.headingSpan}>BookHub</span></Text>
      <Text style={styles.secondaryText}>Enter User Name</Text>
      <TextInput 
        style={styles.input}
        value={username}
        onChangeText={onChangeUserName}
        placeholder='Enter Username'
      />
      <Text style={styles.secondaryText}>Enter Your Email</Text>
      <TextInput 
        style={styles.input}
        value={email}
        onChangeText={onChangeEmail}
        placeholder='Enter Your Email'
        keyboardType= {"email-address"}
      />
      <Text style={styles.secondaryText}>Enter Your Password</Text>
      <TextInput 
        style={styles.input}
        value={password}
        onChangeText={onChangePassword}
        placeholder='Enter Your Password'
      />
        <Pressable
            style={styles.signupBtn}>
            <Text style={styles.buttonText}>SignUP</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#0C134F',
    alignItems:'center',
    justifyContent:'center',
  },
  input:{
    // height:45,
    margin:5,
    borderWidth:2,
    padding:25,
    fontSize:16,
    borderColor:'#5C469C',
    color: '#D4ADFC',
    borderRadius:30,
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
    },
  headingSpan: {
        color: '#D4ADFC'
    },
  signupBtn:{
        margin:10 ,
        paddingHorizontal:70,
        paddingVertical:20,
        borderColor:'#5C469C',
        color:'#D4ADFC',
        backgroundColor:'#ffff',
        borderRadius:20,
    }

});

export default signupForm;