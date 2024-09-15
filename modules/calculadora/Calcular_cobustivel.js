import { useState } from "react";
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import logo from '../../images/posto-de-gasolina.png'; // Certifique-se que o caminho está correto

export default function Calcular_cobustivel() {
  const [Alcool_price, setAlcool] = useState(0);
  const [Gasolina_price, setGasolina] = useState(0);
  const [message, setMessage] = useState("");

  const textdefault = (value_alcool, value_gasolina) => {
    const resultado = value_alcool / value_gasolina;
    if (value_alcool && value_gasolina) {
      if (resultado < 0.7) {
        setMessage("Abastecer com Álcool");
      } else if (isNaN(resultado)) {
        setMessage(""); // Caso de erro no cálculo, deixar vazio
      } else {
        setMessage("Abastecer com Gasolina");
      }
    } else {
      setMessage("Por favor, insira valores válidos");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 100, height: 100 }} />
      <Text style={styles.title}>
        Qual a melhor opção?
      </Text>

      <Text style={styles.text}>Álcool (preço por litro):</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={String(Alcool_price)}
        onChangeText={a => setAlcool(parseFloat(a))}
        placeholder="Digite o preço do álcool"
      />

      <Text style={styles.text}>Gasolina (preço por litro):</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={String(Gasolina_price)}
        onChangeText={a => setGasolina(parseFloat(a))}
        placeholder="Digite o preço da gasolina"
      />

      <Button
        title="Calcular"
        onPress={() => textdefault(Alcool_price, Gasolina_price)}
      />

      {message ? <Text style={styles.result}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text:{
    color: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    color: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: 200,
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});
