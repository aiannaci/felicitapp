import { View, Text, Alert } from 'react-native'
import { Button, Input } from 'react-native-elements'
import React, { useEffect, useState } from 'react'
import { styles } from "./PrincipalStyles"
import AsyncStorage from '@react-native-async-storage/async-storage'

export function Principal() {

    const [nombre, setNombre] = useState("");
    const [nombreRecuperado, setNombreRecuperado] = useState("");

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('felicitapp-nombre', value);
        } catch (e) {
            // saving error
        }
    };

    const cargarNombre = () => {
        if (nombre === "") {
            Alert.alert("Por favor ingresa tu nombre");
        } else {
            storeData(nombre);
            getData();
        }

    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('felicitapp-nombre');
            if (value !== null) {
                setNombreRecuperado(value);
            }
        } catch (e) {
            // error reading value
        }
    };

    useEffect(() => {
        getData();
    }, [])



    return (
        <View style={styles.content} >
            <Text style={styles.titulo}>Bienvenido</Text>
            <Text style={styles.descripcion}>Ingresa tu nombre para regalarte una frase</Text>
            <Input placeholder="Tu nombre..." onChangeText={(text) => setNombre(text)} />
            <Button title="Aceptar" buttonStyle={styles.btn} onPress={cargarNombre}></Button>
            {nombreRecuperado !== "" && (<Text>El nombre almacenado es: {nombreRecuperado} </Text>)}


        </View>
    )
}