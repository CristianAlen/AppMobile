import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';



export default class Retiro extends React.Component {

    constructor(){
        super()
    }

    Comprobar(route){
        var estado = route.Estado;
        alert(estado);
    }

    

    render() {
       this.Comprobar;
        return (
            <View style={styles.container}>
                <View style={{ margin: 100, width: 350 }}>
                    <View style={styles.sectorButton}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('Planilla')}
                        //onPress={this.verificarUsuario.bind(this)}
                        >
                            <Text style={styles.textWhite}>RETIRO CON PLANILLA</Text>
                            
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sectorButton}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('RetiroEspontaneo')}
                        //onPress={this.verificarUsuario.bind(this)}
                        >
                            <Text style={styles.textWhite}>RETIRO ESPONTANEO</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.sectorButton}>
                    <TouchableOpacity
                        style={styles.button}
                    //onPress={this.verificarUsuario.bind(this)}
                    >
                        <Text style={styles.textWhite}>PENDIENTES DE TRANSMITIR</Text>
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
    sectorInput: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#5b2b82",
        padding: 25,
        width: 400
    },
    textWhite: {
        color: '#FFF',
        fontSize: 20
    },
    sectorButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
});
