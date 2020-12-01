import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default class retiroEspontaneo extends React.Component {

    state = {
        tipo: '1',
    };

    render() {
            return (
                <View style={styles.container}>
                    <View style={{ margin: 25 }}>
                        <Picker
                            selectedValue={this.state.tipo}
                            style={{ height: 50, width: 250, borderColor: 'black', borderWidth: 5 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ tipo: itemValue })
                            }>
                            <Picker.Item label="RI - Recibo Imposicion" value="1" />
                            <Picker.Item label="Despaco OR/OA" value="2" />
                        </Picker>
                    </View>
                    
                    <View style={{ marginTop: 250 }}>
                        <View style={styles.sectorButton}>
                            <View style={{ marginRight: 5 }}>
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
