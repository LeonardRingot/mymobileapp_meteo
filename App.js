import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home'
import ButtonForecast from './components/ButtonForecast';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{ headerShown: false }} name="home" component={Home} />
        <Stack.Screen options={{ title: 'Détails prévisions' }} name="buttonForecast" component={ButtonForecast} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/*  */