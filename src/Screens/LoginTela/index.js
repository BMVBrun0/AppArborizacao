import { useState } from 'react';
import { Text, View, Button, TextInput, Image, Alert,ScrollView} from 'react-native';
import styles from '../LoginTela/styles';


export function LoginTela({navigation}) {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function fazerLogin() {
    if (login == "" && senha == "") {
      navigation.navigate('CadastroTelas')
    }
    else
      {
        Alert.alert('Login ou Senha incorreto')
      }
  }
  return (
    <View style={styles.containerApp}>
      <View>
        <View style={styles.topoDaTela}>
          <Text style={styles.titulo}>Arborização Chapecó</Text>
          {/* <ListaArvores/> */}
          <Image source={require('../../assets/imagens/logo.png')} style={styles.logo} /> 
        </View>
      </View>
      <View style={styles.meioDaTela}>
          <View style={styles.containerInput}>
            <View style={styles.divUsu}>
              <TextInput 
                style={styles.usuario} 
                placeholder='Usuario'
                onSubmitEditing={(value) => setLogin(value.nativeEvent.text)}
              />
            </View>
              <TextInput 
                style={styles.senha} 
                placeholder='Senha'
                onSubmitEditing={(value) => setSenha(value.nativeEvent.text)}
              />
          </View>
          {/* <CustomButton></CustomButton> */}
          <Button style={styles.botaoLogin} title='Login' color='black' onPress={fazerLogin}/>
      </View>
    </View>
  );
}


