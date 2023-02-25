import { Text, View, Image } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { arvores } from "../../data/ArvoresList";
import { useEffect, useState } from "react";
import styles from '../ArvoreDetalhes/styles'

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


