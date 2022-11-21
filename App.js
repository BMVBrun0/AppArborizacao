import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerApp}>
      <View>
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
              <Button style={styles.botaoLogin} title='Continuar' color='black'/>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#8fbc8f',
    alignItems: 'stretch',
  },
  meioDaTela:{
    marginTop:'30%',
    marginLeft: '15%',
    height: '50%',
    width: '70%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: '10%',
  },

  titulo: {
    fontSize: '30%',
    marginLeft: '13%',
  },
  botaoLogin: {
    borderRadius: '10%',
  },

  senha: {
    borderWidth:1,
    borderColor:'black',
    width: '90%',
    height: '15%',
    backgroundColor: 'white',
    fontWeight: 'bold',
    padding: 10
  },
  containerInput: {
    marginTop: '10%',
    marginLeft: '15%',
  },

  logo:{
    width:'50%',
    height:'60%',
    marginLeft: '25%',
    marginTop: '10%',
  },
  baixoDaTela:{

  },
  divUsu:{
    height:'5%',
    paddingBottom:'5%',
  },
});
