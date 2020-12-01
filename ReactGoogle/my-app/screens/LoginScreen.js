
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Image, TextInput } from 'react-native';

import * as Google from 'expo-google-app-auth'

export default class LoginScreen extends Component{

    constructor(props){
        super(props);
    }


    navigate(estado){
        this.props.navigator.push({
            estado
        })
    }

    // Acuerdense de poner su key de Google Console
    async _signInWithGoogle(){
        try {
            //677522856874-a0gmkjpqfl1m7sl9g9oolfb5ejkbcdg5.apps.googleusercontent.com
            //
            const result = await Google.logInAsync({
                androidClientId: "677522856874-a0gmkjpqfl1m7sl9g9oolfb5ejkbcdg5.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });
    
            if (result.type === 'success') {
                try {
                    //this.props.onLogin();  

                    //alert(this.props.onLogin());
                    this.props.navigation.navigate('Retiros', { estado: true });
                } catch (error){
                    console.log("Something happened " + error);
                }
            } else {
                return { cancelled: true };
            }

        } catch (e) {
            return { error: true };
        }

    }

    //Esto es MIO
    state = {
        Usuario: '',
        Contraseña: ''
    }

    setUsuario(e) {

        this.state.Usuario = e;

    }

    setContraseña(e) {

        this.state.Contraseña = e;

    }

    verificarUsuario() {
        console.log('Usuario:' + this.state.Usuario + 'Contraseña:' + this.state.Contraseña);
        //this.props.navigation.navigate('Home');

    }
    render(){
        return (
            <View style={styles.container}>
                                <View style={styles.logo}>
                    <Image
                        //style={styles.logo}
                        resizeMode="contain"
                        style={{ height: 200, width: 200 }}
                        source={require('../assets/oca.svg')}
                    />
                </View>
                <View style={styles.sectorInput}>
                    <Text style={styles.textInput}>Usuario</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.setUsuario.bind(this)}
                    />


                    <Text style={styles.textInput}>Clave</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.setContraseña.bind(this)}
                    />

                </View>
                <View style={styles.sectorButton}>
                    <TouchableOpacity
                        style={styles.button}
                        //onPress={this.verificarUsuario.bind(this)}
                        onPress={() => this.props.navigation.navigate('Retiros')}

                    >
                        <Text style={styles.textWhite}>INGRESAR</Text>
                    </TouchableOpacity>
                </View>
                <Button
                    onPress={() => this._signInWithGoogle()}
                    title="Iniciar sesión con Google"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#5b2b82",
        padding: 25,
        width: 400
    },
    sectorButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
        marginBottom: 25
    },
    sectorInput: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textWhite: {
        color: '#FFF',
        fontSize: 20
    },
    textInput: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        fontSize: 15
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        width: 400,
        marginBottom: 30
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'

    }
});

