import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppNavigation } from './src/Navegacion/AppNavigation';
import { Principal } from './src/pantallas/Principal/Principal';

export default function App() {
  return (
    <NavigationContainer>
      <Principal />
    </NavigationContainer>
  );
}


