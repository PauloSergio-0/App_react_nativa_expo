import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, Image} from 'react-native';
import icon from './assets/icon.png'
export default function App() {
  return (
    <View style={styles.container}>

      <Image source={icon} style = {{width: 100, height: 100}}></Image>
      <Text
      selectable={true}
      selectionColor="red">Open up App.js as as to start working on your app!</Text>
      <Text>Maduro é gente boa :|</Text>
      <Text>Maduro :|</Text>
      <StatusBar style="auto" />

      <Button
      title= "sldkjfhjdsk"
      color="red">

      </Button>
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
