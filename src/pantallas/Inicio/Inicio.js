import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db } from './Firebase';
import { styles } from './InicioStyles';
import { collection, onSnapshot, query, where, getFirestore } from "@firebase/firestore";

export function Inicio() {

    const [nombreRecuperado, setNombreRecuperado] = useState("");
    const [fraseRecuperada, setFraseRecuperada] = useState("");
    const [autor, setAutor] = useState("");
    const [id, setId] = useState("1");


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

    const obtenerFrase = () => {
        const q = query(collection(db, "mensajes"), where("id", "==", id));

        onSnapshot(q, (snapshot) => {
            const frases = [];
            snapshot.forEach((doc) => {
                frases.push(doc.data().frase);
            });

            setFraseRecuperada(frases);

        });
    };

    const obtenerAutor = () => {
        const q = query(collection(db, "mensajes"), where("id", "==", "1"));

        onSnapshot(q, (snapshot) => {
            const frases = [];
            snapshot.forEach((doc) => {
                frases.push(doc.data().autor);
            });

            setAutor(frases);

        });
    };

    useEffect(() => {
        getData();
        obtenerFrase();
        obtenerAutor();
    }, []);

    useEffect(() => {
        AsyncStorage.setItem("felicitapp-ultimaActualizacion", Date.now().toString());
    })

    useEffect(() => {
        const obtenerUltimaActualizacion = async () => {
            try {
                const ultimaActualizacion = await AsyncStorage.getItem("felicitapp-ultimaActualizacion");
                if (ultimaActualizacion !== null) {
                    const tiempoTranscurrido = Date.now() - parseInt(ultimaActualizacion, 10); //0.7 
                    const incrementos = Math.floor(tiempoTranscurrido / (24 * 60 * 60 * 1000));
                    if (incrementos > 1) {
                        setId(id + 1);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }

        obtenerUltimaActualizacion();
    }, []);


    return (
        <View style={styles.content} >
            <Text style={styles.descripcion}> Y recuerda  {nombreRecuperado} ... </Text>
            <Text style={styles.descripcion}> {fraseRecuperada} </Text>
            <Text style={styles.descripcion}> {autor} </Text>
        </View>
    )
}