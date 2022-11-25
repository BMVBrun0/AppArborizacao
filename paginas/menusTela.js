import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image,TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerApp}>
      <View style={styles.topoDaTela}>
        <Text style={styles.titulo}>App Arborização</Text>
        <TouchableOpacity>
            <Image source={require('./logo.png')} style={styles.arrow} />
        </TouchableOpacity>
      </View>
      <View style={styles.meioTela}>
        <TouchableOpacity>
          <View style={styles.listaPlantas}>
              <View style={styles.divBotoes}>
                <Image source={require('./qrCode.png')} style={styles.qrCode} />
                <Text>Leitor de QR Code</Text>
              </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.meioTela2}>
        <TouchableOpacity>
          <View style={styles.leitorQrCod}>
            <View style={styles.divBotoes}>
              <Image source={require('./listIcon.png')} style={styles.listIcon} />
              <Text>Lista de Arvores na Região</Text>
            </View>
          </View>
        </TouchableOpacity>
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
  meioTela:{
    height: '25%',
    width:'100%',
    marginTop:'30%',
  },
  meioTela2:{
    height: '25%',
    width:'100%',
    marginBottom:'50%'
  }
  ,
  listaPlantas:{
    backgroundColor:'white',
    width: '80%',
    height:'90%',
    marginLeft: '10%',
    borderRadius: '10%',
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  leitorQrCod:{
    backgroundColor:'white',
    width: '80%',
    height:'90%',
    marginLeft: '10%',
    borderRadius: '10%',
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  topoDaTela:{
    backgroundColor:'white',
    width: '80%',
    height:'11%',
    marginLeft: '10%',
    borderRadius: '10%',
    marginTop: '10%',
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  divBotoes:{
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  titulo: {
    fontSize: '25%',
    marginLeft: '30%',
    marginTop: '10%',
  },
  arrow:{
    width:'20%',
    height:'105%',
    marginLeft: '5%',
    marginTop: '-12%',
  },
  qrCode:{
    width:'20%',
    height:'40%',
    marginLeft: '5%',
    marginRight: '10%',
  },
  listIcon:{
    width:'20%',
    height:'40%',
    marginLeft: '5%',
    marginRight: '10%',
  },

});
