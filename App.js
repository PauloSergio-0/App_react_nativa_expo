import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, Image, TextInput} from 'react-native';
import icon from './assets/icon.png'
import Calcular_cobustivel from './modules/calculadora/Calcular_cobustivel';

import { useState } from 'react';
export default function App() {

  return (
    <View style={styles.container}>


      {/* Aqui estamos incluindo o componente Calcular_cobustivel */}
      <Calcular_cobustivel />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text:{
    color: '#fff',
  }
});