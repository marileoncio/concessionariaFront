import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CadastroCarros from './src/screens/CadastroCarros';
import Footer from './src/components/Footer';
import Home from './src/screens/Home';
import Listagem from './src/screens/Listagem';


const Stack = createStackNavigator();

function App(): JSX.Element{
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>

      <Stack.Screen name='Profile' component={CadastroCarros} options={{headerShown: false}}/>

      <Stack.Screen name='listagem' component={Listagem} options={{headerShown: false}}/>




    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;