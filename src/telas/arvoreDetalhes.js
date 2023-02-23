import { StyleSheet, Text, View, Image } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { arvores } from "../data/ArvoresList";
import { useEffect, useState } from "react";

export function ArvoreDetalhes() {
  
  const [objeto, setObjeto] = useState(null);

  const navigator = useRoute();

  useEffect(() => {
    const { id } = navigator.params;
    const objetoArvore = arvores.filter(m => m.id == id)[0];
    setObjeto(objetoArvore)
  },[])


  return (
    objeto == null ? <Text></Text> :

    <View style={styles.containerApp}>
      <View>
        <View style={styles.topoDaTela}>
          <Image source={objeto.image} style={styles.logo} /> 
        </View>
      </View>
      <View style={styles.meioDaTela}>
        <Text style={styles.titulo}>{objeto.name}</Text>
        <Text style={styles.text}>{objeto.description}</Text>
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
