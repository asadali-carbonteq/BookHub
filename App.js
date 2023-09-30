import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import WelcomeScreen from './App/components/welcome';
import SignInScreen from './App/components/signIn';
import HomeScreen from './App/components/home';

export default function App() {
  return (
    // <WelcomeScreen />
    // <SignInScreen />
    <HomeScreen />
  );
}

