import React from "react";
import {StyleSheet,View, FlatList, Image} from "react-native";
import { CardArvoresDetalhesItem } from "../components/CardArvoresDetalhesItem";
//import { SeparatorItem } from "../components/SeparatorItem/SeparatorItem";
import { arvores } from "../data/ArvoresList";

export function CardArvoresDetalhes({navigation}) {
  function cliquei(){
    navigation.navigate('TelaInicio')
  }

  function renderItem({ item }) {
    return <CardArvoresDetalhesItem {...item} clique={cliquei} />;
  }
  return (
    <View style={styles.container}>
        <View data={arvores} keyExtractor={(item) => item.name} renderItem={renderItem}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
