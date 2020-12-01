import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class Retiro extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.sectorButton}>
                        <View style={{marginRight: 5}}>
                            <TouchableOpacity
                                style={styles.buttonim}
                                onPress={() => this.props.navigation.navigate('')}
                            //onPress={this.verificarUsuario.bind(this)}
                            >
                                <Text style={styles.textWhite}>IM</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('IngresoPlanilla')}
                            //onPress={this.verificarUsuario.bind(this)}
                            >
                                <Text style={styles.textWhite}>PLANILLA RECORRIDO</Text>
                                
                            </TouchableOpacity>
                        </View>
                    </View>
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
        padding: 30,
        width: 300
    },
    buttonim: {
        alignItems: "center",
        backgroundColor: "#5b2b82",
        padding: 30,
        width: 100
    },
    textWhite: {
        color: '#FFF',
        fontSize: 20
    },
    sectorButton: {
        flexDirection: 'row',
    },
});
