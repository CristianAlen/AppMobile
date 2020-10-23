import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
//import Logo from '../../assets/images/logo.gif';
import axios from 'axios';

export default class SearchApi extends React.Component {

  state = {
    response: [],
    estado: false
  }
  setCapitulo(e){
    var cap = e;
    this.setState({value : cap});
  }
  buscarCapitulo = () => {
    var cap = this.state.value;

    axios.get('https://onepiececover.com/api/chapters/'+cap)
    .then(res => {
        console.log(res);
        if(res.data != false){
          this.setState({
            response: res.data,
            estado: true
          })
      }else{
        console.log("Error");
      }
    });
  }
render(){
  if(this.state.estado != true){
  return (
      
    <View style={styles.container}>

    <Image 
    style={styles.logo}
    source={ require('../../assets/images/logo.gif') }
    />

      <Text>Que Capitulo Busca?</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 25, padding: 15}}
      onChangeText={this.setCapitulo.bind(this)}

    />
    <Button
    onPress={this.buscarCapitulo.bind(this)}
    title="Buscar"
    color="#841584"
    />

    </View>

  );
}else{
  return (
      
    <View style={styles.container}>

    <Image 
    style={styles.logo}
    source={ require('../../assets/images/logo.gif') }
    />
      <Text>Que Capitulo Busca?</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 25, padding: 15}}
      onChangeText={this.setCapitulo.bind(this)}

    />
    <Button
    onPress={this.buscarCapitulo.bind(this)}
    title="Buscar"
    color="#841584"
    />
    <Text style={styles.box}>Titulo: {this.state.response.title}</Text>
    <Text style={styles.box}>Capitulo: {this.state.response.chapter}</Text>
    <Text style={styles.box}>Personajes: {this.state.response.characters}</Text>
    <Text style={styles.box}>Sumario: {this.state.response.summary}</Text>
    </View>
  );
}
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex: 1,
    textAlign: 'center',
    padding: '5px'
    
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 15
  },
});