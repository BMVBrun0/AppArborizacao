import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export function ArvoreDetalhes({navigation}) {

  return (
    <View style={styles.containerApp}>
      <View>
        <View style={styles.topoDaTela}>
          <Image source={require("../../assets/arvores/Screenshot_5.png")} style={styles.logo} /> 
        </View>
      </View>
      <View style={styles.meioDaTela}>
        <Text style={styles.titulo}>Pata de Vaca (Bauhinia variegata)</Text>
        <Text style={styles.text}>Essa é uma das árvores nativas indicadas para arborização urbana, já que seu porte pode chegar apenas a 9 m. Mas caso ela seja plantada em calçadas com fiação, é necessário podá-la regularmente.</Text>
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
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginLeft:'10%',
    marginRight:'10%',
    marginTop:'-40%'
  },
  topoDaTela:{
    marginTop:'20%',
    height: '59%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  meioDaTela: {
    height: '30%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    marginBottom: '40%'
  },
  titulo: {
    fontSize: '25%',
    marginLeft: '10%',
    marginTop:'-40%',
  },
  logo:{
    width:'100%',
    height:'100%',
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
