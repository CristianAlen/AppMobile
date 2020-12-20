import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchApi from './app/components/Searchapi';

export default function App() {
  return (
    /*
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>*/

    <SearchApi />
  );
}
/*Comentario */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
