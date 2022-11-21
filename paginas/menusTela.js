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
      <View style={styles.listaPlantas}>
      </View>
      <View style={styles.leitorQrCod}>
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
  listaPlantas:{
    backgroundColor:'white',
    width: '80%',
    height:'20%',
    marginLeft: '10%',
    borderRadius: '10%',
    marginTop:'20%',
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  leitorQrCod:{
    backgroundColor:'white',
    width: '80%',
    height:'20%',
    marginLeft: '10%',
    borderRadius: '10%',
    marginBottom: '50%',
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
    marginTop: '20%',
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
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

});
