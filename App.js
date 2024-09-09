import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, Image, TextInput} from 'react-native';
import icon from './assets/icon.png'

import { useState } from 'react';
export default function App() {

  const [base, setbase]= useState();
  const [altura, setaltura]= useState();
  
  function calcular(){

  }
  return (
    <View style={styles.container}>

      {/* <Image source={icon} style = {{width: 100, height: 100}}></Image>
      <Text
      selectable={true}
      selectionColor="red">Open up App.js as as to start working on your app!</Text>
      <Text>Maduro é gente boa :|</Text>
      <Text>Maduro :|</Text>
      <StatusBar style="auto" />

      <Button
      title= "sldkjfhjdsk"
      color="red">

      </Button> */}
      <Text>Insira os dados abaixo para calcular a área do retangulo</Text>

      <TextInput placeholder='Base'
      keyboardType='numeric'
      onChangeText={setbase}>
      </TextInput>

      <TextInput placeholder='Altura'
      keyboardType='numeric'>
      </TextInput>

      <Button
      title='Calcular'
      color="Blue"></Button>
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
