import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import WelcomeScreen from './components/welcome';
import SignInScreen from './components/signIn';

export default function App() {
  return (
    //<WelcomeScreen />
    <SignInScreen />
  );
}

