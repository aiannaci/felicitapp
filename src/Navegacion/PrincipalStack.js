import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Principal } from '../pantallas/Principal/Principal';
import { AppNavigation } from './AppNavigation';


export function PrincipalStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Principal" component={Principal} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="AppNavigation" component={AppNavigation} options={{
                headerShown: false,
            }} />


        </Stack.Navigator>
    )
}