import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class ingresoPlanilla extends React.Component {
    state = {
        borrar: '<',
        text: ''
    }

    setText = (e) => {
        this.state.text += e;
        
        this.setState({
            text: this.state.text
        });
        
        //var text = this.state.text;
        //alert(text);
    }
    
    deleteText = () => {
        var text = this.state.text;

        text = text.substring(0, text.length - 1);
        
        this.setState({
            text: text
        });
    }

    render() {
        
        return (

            <View style={styles.container}>
                <Text style={{ fontSize: 15, margin: 15 , marginTop: 70}}>INGRESE PLANILLA RECORRIDO:</Text>
                <View>

                    <TextInput /* INPUT */ style={{ borderBottomColor: 'black', borderBottomWidth: 2}}> {this.state.text} </TextInput>
                    <View style={styles.sectorButton}>
                        <View style={{ marginRight: 5 }}>
                            <TouchableOpacity
                            style={styles.buttonim}
                            onPress={() => this.setText(1)}
                            >
                                <Text style={styles.textWhite}>1</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginRight: 5 }}>
                            <TouchableOpacity
                                style={styles.buttonim}
                                onPress={() => this.setText(2)}
                            //onPress={this.verificarUsuario.bind(this)}
                            >
                                <Text style={styles.textWhite}>2</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.buttonim}
                                onPress={() => this.setText(3)}
                            //onPress={this.verificarUsuario.bind(this)}
                            >
                                <Text style={styles.textWhite}>3</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.sectorButton}>
                        <View style={{ marginRight: 5 }}>
                            <TouchableOpacity
                                style={styles.buttonim}
                                onPress={() => this.setText(4)}
                            //onPress={this.verificarUsuario.bind(this)}
                            >
                                <Text style={styles.textWhite}>4</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginRight: 5 }}>
                            <TouchableOpacity
                                style={styles.buttonim}
                                onPress={() => this.setText(5)}
                            //onPress={this.verificarUsuario.bind(this)}
                            >
                                <Text style={styles.textWhite}>5</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.buttonim}
                                onPress={() => this.setText(6)}
                            //onPress={this.verificarUsuario.bind(this)}
                            >
                                <Text style={styles.textWhite}>6</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.sectorButton}>
                        <View style={{ marginRight: 5 }}>
                            <TouchableOpacity
                                style={styles.buttonim}
                                onPress={() => this.setText(7)}
                            //onPress={this.verificarUsuario.bind(this)}
                            >
                                <Text style={styles.textWhite}>7</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginRight: 5 }}>
                            <TouchableOpacity
                                style={styles.buttonim}
                                onPress={() => this.setText(8)}
                            //onPress={this.verificarUsuario.bind(this)}
                            >
                                <Text style={styles.textWhite}>8</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.buttonim}
                                onPress={() => this.setText(9)}
                            //onPress={this.verificarUsuario.bind(this)}
                            >
                                <Text style={styles.textWhite}>9</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.sectorButton}>
                        <View style={{ marginRight: 5 }}>
                            <TouchableOpacity
                                style={styles.buttonim}
                              
                            //onPress={this.verificarUsuario.bind(this)}
                            >
                                <Text style={styles.textWhite}>AB</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginRight: 5 }}>
                            <TouchableOpacity
                                style={styles.buttonim}
                            onPress={() => this.setText(0)}
                            //onPress={this.verificarUsuario.bind(this)}
                            >
                                <Text style={styles.textWhite}>0</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.buttonim}
                                onPress={() => this.deleteText()}
                            //onPress={this.verificarUsuario.bind(this)}
                            >
                                <Text style={styles.textWhite}> {this.state.borrar} </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.sectorButton}>
                        <View>
                            <TouchableOpacity
                                style={styles.buttonok}
                              
                            //onPress={this.verificarUsuario.bind(this)}
                            >
                                <Text style={styles.textWhite}>OK</Text>
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
    buttonok: {
        alignItems: "center",
        backgroundColor: "#5b2b82",
        padding: 30,
        width: 310
    },
    textWhite: {
        color: '#FFF',
        fontSize: 20
    },
    sectorButton: {
        flexDirection: 'row',
        marginTop: 20,
    },
});
