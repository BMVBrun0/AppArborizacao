import React from "react";
import {StyleSheet,View,FlatList,Linking} from "react-native";
import { ListaArvoresItem } from "../components/ListaArvoresItem";
import { SeparatorItem } from "../components/SeparatorItem/SeparatorItem";
import { arvores } from "../data/ArvoresList";

export function ListaDeArvores({navigation}) {
  function cliquei(){
    navigation.navigate('CardArvoresDetalhes')
  }
  function cliqueIcon(id){
    //navigation.navigate('Mapa')
    const url = arvores.filter(m => m.id == id)[0].localizacao;
    console.log(url);
    Linking.openURL(url)
  }

  function renderItem({ item }) {
    return <ListaArvoresItem {...item} clique={cliquei} localizacao={cliqueIcon(item.id)} />;
  }
  return (
    <View style={styles.container}>
      <FlatList ItemSeparatorComponent={SeparatorItem} data={arvores} keyExtractor={(item) => item.name} renderItem={renderItem}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
