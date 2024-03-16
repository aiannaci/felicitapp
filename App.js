import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppNavigation } from './src/Navegacion/AppNavigation';
import { PrincipalStack } from './src/Navegacion/PrincipalStack';

export default function App() {
  return (
    <NavigationContainer>
      <PrincipalStack />
    </NavigationContainer>
  );
}


