import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './components/welcome';
import SignInScreen from './components/signIn';
import SignupForm from './components/signUp';
import HomeScreen from './components/home';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <WelcomeScreen />
    // <SignInScreen />
    // <SignupForm/>
    // <HomeScreen />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signup" component={SignupForm} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

