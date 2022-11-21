import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerApp}>
      <View>
        <View style={styles.topoDaTela}>
          <Text style={styles.titulo}>Arborização Chapecó</Text>
          <Image source={require('./logo.png')} style={styles.logo} /> 
        </View>
      </View>
      <View style={styles.meioDaTela}>
          <View style={styles.containerInput}>
            <View style={styles.divUsu}><TextInput style={styles.usuario} placeholder='Usuario'/></View>
            <TextInput style={styles.senha} placeholder='Senha'/>
          </View>
          <Button style={styles.botaoLogin} title='Login' color='black'/>
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
  topoDaTela:{
    marginTop:'20%',
    height: '56%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  meioDaTela: {
    height: '30%',
    flexDirection: 'column',
    //backgroundColor: '#4F7942',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    marginBottom: '40%'
  },
  titulo: {
    fontSize: '30%',
    marginLeft: '13%',
  },
  botaoLogin: {
    borderRadius: '10%',
  },
  usuario: {
    borderWidth:1,
    borderColor:'black',
    backgroundColor: 'white',
    fontWeight: 'bold',
    height: '100%',
    width:'80%',
    padding: 10,
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  senha: {
    borderWidth:1,
    borderColor:'black',
    width: '80%',
    height: '30%',
    marginRight: '2%',
    backgroundColor: 'white',
    fontWeight: 'bold',
    padding: 10,
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
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
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  divUsu:{
    height:'42%',
    paddingBottom:'5%',
  },
});
