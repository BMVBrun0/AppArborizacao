import { Text, View, Button, TextInput, Image,TouchableOpacity } from 'react-native';
import styles from '../CadastroTelas/styles'

export function CadastroTelas({navigation}) {
  function criarUsuario() {
    navigation.navigate('MenusTela')
  }
  function voltar(){
    navigation.goBack()
  }
  return (
    <View style={styles.containerApp}>
      <View>
        <View style={styles.topoDaTela}>
          <Text style={styles.titulo}>Cadastre-se</Text>
          <TouchableOpacity
          onPress={voltar}
          >
            <Image source={require('../../assets/imagens/arrowBack.png')} style={styles.arrow} />
          </TouchableOpacity>
        </View>
        <View style={styles.meioDaTela}>
          <View style={styles.containerInput}>
            <View style={styles.divUsu}></View>
              <TextInput style={styles.senha} placeholder='Nome Completo'/>
              <View style={styles.divUsu}></View>
              <TextInput style={styles.senha} placeholder='E-mail'/>
              <View style={styles.divUsu}></View>
              <TextInput style={styles.senha} placeholder='Senha'/>
              <View style={styles.divUsu}></View>
              <TextInput style={styles.senha} placeholder='Confirme a senha'/>
              <View style={styles.divUsu}></View>
              <View style={styles.divBotao}>
                <Button style={styles.botaoLogin} title='Continuar' color='black' onPress={criarUsuario}/>
              </View>
          </View>
        </View>
      </View>
    </View>
  );
}


