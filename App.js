import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [peso,setPeso] = useState(0); 
  const [altura,setAltura] = useState(0);
  const [imc,setImc] = useState(null);

  const calcularImc = () =>{

    var resultado = peso / (altura*altura);
    setImc(resultado.toFixed(2));

  }
  
/* 
linhas 7 a 9 de Criação de Variavel + Definição de valor presente inicialmente
linhas 33 a 45 de Entrada de dados + destino a variavel
linhas 47 a 49 de Saida de dados
Linhas 51 de Botão com acão + Adição de função
Linha 31 de Texto comum + Adição de estilo
Linha 48 de Texto comum + Adição de variavel
Linha 11 a 16 de calculo + criação de função
*Null na variavel denomina que a variavel ira ficar vazia, ou seja dentro de sí propria não existe nenhum tipo de numero
*/

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo calculo IMC</Text> 
      
      <TextInput 
      placeholder="Peso" 
      keyboardType="numeric"
      value={peso}
      onChangeText={(peso)=>setPeso(peso)}
      />

      <TextInput 
      placeholder="Altura" 
      keyboardType="numeric"
      value={altura}
      onChangeText={(altura)=>setAltura(altura)}
      />

  {imc &&(
  <text style={styles.titulo}>IMC: {imc}</text> 
  )}

  <Button title="Calcular" onPress={()=>{calcularImc()}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({ /*Estilo da fonte*/
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{ /*Estilo personalizado para o nome "titulo"*/
    fontSize: 25,
    fontWeight: 'bold' 
  }
});
