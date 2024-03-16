import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Inicio } from '../pantallas/Inicio/Inicio';
import { Cuenta } from '../pantallas/Cuenta/Cuenta';
import { Icon } from 'react-native-elements';
import { Favoritos } from '../pantallas/Favoritos/Favoritos';


const Tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Inicio"
                component={Inicio}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" type="material-community" color="gray" />
                    ),
                }}
            />

            <Tab.Screen
                name="Favoritos"
                component={Favoritos}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="cards-heart" type="material-community" color="gray" />
                    ),
                }}
            />

            <Tab.Screen
                name="Cuenta"
                component={Cuenta}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="account" type="material-community" color="gray" />
                    ),
                }}
            />



        </Tab.Navigator>
    )
}