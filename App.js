import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './App/components/welcome';
import SignInScreen from './App/components/signIn';
import SignupForm from './App/components/signUp';
import HomeScreen from './App/components/home';
import BookDetails from './App/components/bookdetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <WelcomeScreen />
    // <SignInScreen />
    // <SignupForm/>
    // <HomeScreen />
    // <BookDetails />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignupForm} />
        <Stack.Screen name="SignIn" component={SignInScreen} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

