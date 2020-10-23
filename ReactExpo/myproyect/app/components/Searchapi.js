import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, Input } from 'react-native';
//import Logo from '../../assets/images/logo.gif';
import axios from 'axios';

export default function SearchApi() {
  const state = {
    TextValue: {},
    Estado: null
  }

  const [e, setCapitulo] = useState('');

  //const [text, setText] = useState('');

  const buscarCapitulo = () => {
    var cap = e;

    axios.get('https://onepiececover.com/api/chapters/'+cap)
    .then(res => {
        console.log(res);
    })
  }

  return (
      
    <View style={styles.container}>

    <Image source={{uri: 'https://i.pinimg.com/originals/ef/1e/1e/ef1e1e7787a813d943d3bf48262c97d8.jpg'}}/>

      <Text>Que Capitulo Busca?</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 25, padding: 15}}
      onChangeText={e => setCapitulo(e)}
      defaultValue={e}
    />
    <Button
    onPress={buscarCapitulo}
    title="Buscar"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
    />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
