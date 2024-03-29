import React from "react";
import {StyleSheet,View,FlatList,Linking} from "react-native";
import { ListaArvoresItem } from "../../components/ListaArvoresItem";
import { SeparatorItem } from "../../components/SeparatorItem/SeparatorItem";
import { arvores } from "../../data/ArvoresList";
import styles from '../ListaDeArvores/styles'

export function ListaDeArvores({navigation}) {

  function cliquei(id){
    navigation.navigate('ArvoreDetalhes', { id })
  }

  async function cliqueIcon(id){
    const url = arvores.filter(m => m.id == id)[0].localizacao;
    await Linking.openURL(url)
  }


  function renderItem({ item }) {
    return <ListaArvoresItem {...item} clique={() => cliquei(item.id)} localizacao={() => cliqueIcon(item.id)}/>;
  }
  
  return (
    <View style={styles.container}>
      <FlatList data={arvores} keyExtractor={(item) => item.name} renderItem={renderItem}/>
    </View>

  );
}

