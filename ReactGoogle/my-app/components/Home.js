import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';


//import logo from '../assets/oca.svg'

export default class Home extends React.Component {

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
    
    render() {

        return (
            <View>
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
        marginTop: 150
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
